import generateUniqueId from "generate-unique-id";
import { OrderValidBody } from "../interfaces/OrderValidBody";
import { UserPrisma } from "../interfaces/UserPrisma";
import { prisma } from "../../prisma/prisma";
import { Prisma } from "@prisma/client";

export const add_order_to_database = async (
  validBody: OrderValidBody,
  totalPrice: number,
  user: UserPrisma | null
) => {
  try {
    let newOrder = await prisma.order.create({
      data: {
        orderNumber: generateUniqueId({
          length: 5,
        }),
        email: validBody.email,
        name: validBody.name,
        city: validBody.city,
        zip: validBody.zip,
        area: validBody.area,
        address: validBody.address,
        shippingMethod: validBody.shipping,
        payment: validBody.payment,
        instructions: validBody.instructions,
        price: validBody.shipping === "standard" ? totalPrice : totalPrice + 20,
        productList: JSON.stringify(validBody.productList),
        userID: user ? user.id : null,
        isRegisteredUser: user ? true : false,
      },
    });

    return newOrder;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        add_order_to_database(validBody, totalPrice, user);
      }
    }

    throw error;
  }
};
