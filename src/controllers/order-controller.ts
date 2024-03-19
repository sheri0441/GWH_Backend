import { Request, Response, NextFunction } from "express";
import { parse } from "valibot";
import { prisma } from "../prisma";
import { Product } from "../interfaces/Product";
import { orderForm } from "../validationSchema/orderForm";
import { HttpError } from "../models/http-error";
import { sendMail } from "../util/nodemailer";
import { order_confirmation } from "../email_template/order_confirmation";
import { OrderProduct } from "../interfaces/OrderProduct";
import { remove_repeated_products } from "../util/remove_repeated_products";
import { reduce_data_to_orderProducts } from "../util/reduce_data_to_orderProducts";
import { UserPrisma } from "../interfaces/UserPrisma";
import { add_order_to_database } from "../util/add_order_to_database";
import { calculate_orderProducts_total_price } from "../util/calculate_orderProducts_total_price";
import { find_user } from "../util/find_user";
import { get_productList_id } from "../util/get_productList_id";
import Stripe from "stripe";
import { CartItem } from "../interfaces/CartItem";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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

  const { email, productList } = validBody;

  const newProductList = remove_repeated_products(productList);

  let productIdArray = get_productList_id(newProductList);

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

  const numberOfProductsInOrder = newProductList.length;

  const isForeignItemFound =
    productInStockThatMatch.length !== numberOfProductsInOrder;

  if (isForeignItemFound) {
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

  let user: UserPrisma | null;
  try {
    user = await find_user(email);
  } catch (error) {
    next(
      new HttpError("There is server internal issue related to email.", 400)
    );
    return;
  }

  let orderProductList: OrderProduct[] = reduce_data_to_orderProducts(
    productInStockThatMatch,
    newProductList
  );

  const totalPrice = calculate_orderProducts_total_price(orderProductList);

  let newOrder;

  try {
    newOrder = await add_order_to_database(validBody, totalPrice, user);
  } catch (error) {
    next(
      new HttpError(
        "There is server internal issue related order. Please try again.",
        500
      )
    );
    return;
  }

  const mailText = `Dear ${
    newOrder!.name
  }, your order has been received and will be processed as soon as possible. Your total bill is ${
    newOrder!.price
  }`;

  const mailHtml = order_confirmation(newOrder!, orderProductList);

  sendMail({
    to: newOrder!.email,
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
) => {
  const body = req.body;

  let validBody;

  try {
    validBody = parse(orderForm, body);
  } catch (error) {
    next(new HttpError("Validation Error", 500));
    return;
  }

  const { email, productList } = validBody;

  const newProductList = remove_repeated_products(productList);

  let productIdArray = get_productList_id(newProductList);

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

  const numberOfProductsInOrder = newProductList.length;

  const isForeignItemFound =
    productInStockThatMatch.length !== numberOfProductsInOrder;

  if (isForeignItemFound) {
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

  let user: UserPrisma | null;
  try {
    user = await find_user(email);
  } catch (error) {
    next(
      new HttpError("There is server internal issue related to email.", 400)
    );
    return;
  }

  let orderProductList: OrderProduct[] = reduce_data_to_orderProducts(
    productInStockThatMatch,
    newProductList
  );

  const totalPrice = calculate_orderProducts_total_price(orderProductList);

  let newOrder;

  try {
    newOrder = await add_order_to_database(validBody, totalPrice, user);
  } catch (error) {
    next(
      new HttpError(
        "There is server internal issue related order. Please try again.",
        500
      )
    );
    return;
  }

  const isShippingExpress = validBody.shipping === "express";
  const shippingRate = await stripe.shippingRates.create({
    display_name: isShippingExpress ? "Express Shipping" : "Ground shipping",
    type: "fixed_amount",
    fixed_amount: {
      amount: isShippingExpress ? 2000 : 0,
      currency: "usd",
    },
    delivery_estimate: {
      minimum: {
        unit: "business_day",
        value: isShippingExpress ? 3 : 5,
      },
      maximum: {
        unit: "business_day",
        value: isShippingExpress ? 5 : 7,
      },
    },
  });

  const products = orderProductList.map((item) => {
    const unitPrice = Number((item.price * 100).toFixed(2));
    const product = {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.image],
        },
        unit_amount: unitPrice,
      },
      quantity: item.quantity,
    };
    return product;
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: products,
    mode: "payment",
    client_reference_id: newOrder.orderNumber,
    success_url: `${process.env.FRONTEND_URL}/checkout?status=success`,
    cancel_url: `${process.env.FRONTEND_URL}/checkout`,
    customer_email: validBody.email,
    shipping_options: [
      {
        shipping_rate: shippingRate.id,
      },
    ],
    expires_at: Math.floor(Date.now() / 1000) + 3600 * 2,
  });

  res.json({ id: session.id });
};

export const stripePaymentStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const sig = req.headers["stripe-signature"];

  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig!, endpointSecret);
  } catch (err: any) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  if (event.type === "checkout.session.completed") {
    const checkoutCompleted = event.data.object;
    if (checkoutCompleted.payment_status === "paid") {
      const order = await prisma.order.update({
        where: {
          orderNumber: checkoutCompleted.client_reference_id as string,
        },
        data: {
          paymentStatus: "paid",
        },
      });

      const productList = JSON.parse(
        order.productList! as string
      ) as CartItem[];

      let productIdArray = get_productList_id(productList);

      let productInStockThatMatch: Product[] = [];

      productInStockThatMatch = await prisma.product.findMany({
        where: {
          id: { in: productIdArray },
        },
      });

      let orderProductList: OrderProduct[] = reduce_data_to_orderProducts(
        productInStockThatMatch,
        productList
      );

      const mailText = `Dear ${order.name}, your order has been received and will be processed as soon as possible. Your total bill is ${order.price}`;

      const mailHtml = order_confirmation(order, orderProductList);

      sendMail({
        to: order.email,
        subject: "Order Confirmation",
        text: mailText,
        html: mailHtml,
      }).catch((err) => console.log(err));
    }
  }

  res.send();
};

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
