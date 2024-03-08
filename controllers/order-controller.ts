import { Request, Response, NextFunction } from "express";
import { parse } from "valibot";
import { prisma } from "../prisma/prisma";
import { Product } from "../interfaces/Product";
import { orderForm } from "../validationSchema/orderForm";
import { HttpError } from "../models/http-error";
import generateUniqueId from "generate-unique-id";
import { Prisma } from "@prisma/client";
import { emailSchema } from "../validationSchema/email";
import { sendMail } from "../util/nodemailer";
import { order_confirmation } from "../email_template/order_confirmation";
import { OrderProduct } from "../interfaces/OrderProduct";
import { CartItem } from "../interfaces/CartItem";

export const orderCashHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;

  let validBody;

  try {
    validBody = parse(orderForm, body);
  } catch (error) {
    next(new HttpError("Validation Error", 500));
    return;
  }

  console.log(validBody);

  const {
    name,
    email,
    city,
    area,
    address,
    shipping,
    payment,
    onlineMethod,
    instructions,
    productList,
    zip,
  } = validBody;

  const remove_repeated_product = (list: CartItem[]) => {
    let newList = [];
    for (let i = 0; i > list.length; i++) {
      //find the double product
      //if you find remove them from the list
      //add the double quantity to one of them and delete the other
      const x = list.find((item) => item.productId === list[i].productId);
      // if (x.length > 1) {
      // }
      // for(let e=0; e > list.length; e ++){

      // }
    }
  };

  let productIdArray = [];

  for (let i = 0; i < productList.length; i++) {
    productIdArray.push(productList[i].productId);
  }

  if (productIdArray.length < 1) {
    next(new HttpError("Please add product to your order.", 400));
    return;
  }

  let productInStockThatMatch: Product[] = [];

  try {
    productInStockThatMatch = await prisma.product.findMany({
      where: {
        id: { in: productIdArray },
      },
    });
  } catch (error) {
    console.log(error);
    next(new HttpError("Provide correct product with correct ID", 400));
    return;
  }

  const numberOfProductsInOrder = productList.length;

  if (productInStockThatMatch.length !== numberOfProductsInOrder) {
    next(
      new HttpError(
        `Error in product ID. ${
          numberOfProductsInOrder - productInStockThatMatch.length
        } product/s is/are unknown to us.`,
        400
      )
    );
    return;
  }

  let user;
  try {
    user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  } catch (error) {
    next(
      new HttpError("There is server internal issue related to email.", 400)
    );
    return;
  }

  // if (payment.toLowerCase() !== "cash" && payment.toLowerCase() !== "card") {
  //   next(new HttpError("Please provide valid payment method.", 400));
  //   return;
  // }

  // if (
  //   payment === "card" &&
  //   !(onlineMethod === "payoneer" || onlineMethod === "stripe")
  // ) {
  //   next(new HttpError("Please provide valid online payment method.", 400));
  //   return;
  // }

  let orderProductList: OrderProduct[] = [];

  for (const prod of productInStockThatMatch) {
    for (let j = 0; j < productList.length; j++) {
      if (prod.id === productList[j].productId) {
        orderProductList.push({
          title: prod.title,
          image: prod.image,
          quantity: productList[j].quantity,
          price: prod.price,
          category: prod.category,
        });
      }
    }
  }

  let totalPrice = 0;

  for (let i = 0; i < orderProductList.length; i++) {
    totalPrice += orderProductList[i].price * orderProductList[i].quantity;
  }

  let newOrder;

  try {
    newOrder = await prisma.order.create({
      data: {
        orderNumber: generateUniqueId({
          length: 5,
        }),
        email: email,
        name: name,
        city: city,
        zip: zip,
        area: area,
        address: address,
        status: "pending",
        shippingMethod: shipping,
        payment: payment,
        onlineMethod: onlineMethod,
        instructions: instructions,
        price: totalPrice,
        productList: JSON.stringify(orderProductList),
        userID: user ? user.id : null,
        isRegisteredUser: user ? true : false,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        next(new HttpError("There is some error, please try again.", 400));
        return;
      }
    }
    next(new HttpError("There is server internal issue.", 500));
    return;
  }

  const mailText = `Dear ${newOrder.name}, your order has been received and will be processed as soon as possible. Your total bill is ${newOrder.price}`;

  const mailHtml = order_confirmation(newOrder, orderProductList);

  sendMail({
    to: newOrder.email,
    subject: "Order Confirmation",
    text: mailText,
    html: mailHtml,
  }).catch((err) => console.log(err));

  res.json({
    message: "Order created successfully.",
    orderNumber: newOrder!.orderNumber,
  });
};

export const orderCardHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const getOrderDetail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { orderNumber } = req.params;

  const order = await prisma.order.findUnique({
    where: {
      orderNumber: orderNumber,
    },
  });

  if (!order) {
    next(new HttpError("Order not found.", 404));
    return;
  }

  res.json({ status: order.status, total: order.price });
};
