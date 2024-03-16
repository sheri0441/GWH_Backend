import { NextFunction, Request, Response } from "express";
import { parse } from "valibot";
import { userSchema } from "../validationSchema/user.js";
import { HttpError } from "../models/http-error.js";
import { prisma } from "../prisma.js";
import { User } from "../interfaces/User.js";
import { CartItem } from "../interfaces/CartItem.js";
import { cartSchema } from "../validationSchema/cart.js";
import { authIdSchema } from "../validationSchema/auth.js";
import { sendMail } from "../util/nodemailer.js";
import { deleteMessage } from "../email_template/deleteMessage";

export const userAndCartHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;

  const authId = req.auth!.payload.sub;

  let validAuthId;

  try {
    validAuthId = parse(authIdSchema, authId);
  } catch (error) {
    next(new HttpError("AuthId required", 422));
    return;
  }

  let validUser: User;

  try {
    validUser = parse(userSchema, body);
  } catch (error) {
    next(new HttpError("There is some error in your user  data", 422));
    return;
  }

  const { email, name, image } = validUser;

  let user;

  try {
    user = await prisma.user.findUnique({
      where: { email: email },
    });
  } catch (error) {
    next(new HttpError("There is some error in the backend.", 422));
    return;
  }

  if (!user) {
    let newUser;
    try {
      newUser = await prisma.user.create({
        data: {
          name: name,
          image: image || "",
          email: email,
          cart: [],
          auth: validAuthId,
        },
      });
    } catch (error) {
      next(new HttpError("There is some error in the backend.", 422));
      return;
    }

    res.json({ cart: newUser.cart, id: newUser.id });
  } else {
    res.json({ cart: user.cart, id: user.id });
  }
};

export const updateUserCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cart } = req.body;

  const authId = req.auth!.payload.sub;

  let validAuthId;

  try {
    validAuthId = parse(authIdSchema, authId);
  } catch (error) {
    next(
      new HttpError("There is some validation error related to email.", 422)
    );
    return;
  }

  let validCartList: CartItem[];

  try {
    validCartList = parse(cartSchema, cart);
  } catch (error) {
    next(new HttpError("AuthId required", 422));
    return;
  }

  let user;

  try {
    user = await prisma.user.findUnique({
      where: {
        auth: validAuthId,
      },
    });
  } catch (error) {
    next(new HttpError("There is some server internal error", 422));
    return;
  }

  if (!user) {
    next(new HttpError("You are not registered on our website.", 404));
    return;
  }

  let updatedUser;

  try {
    updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        cart: JSON.stringify(validCartList),
      },
    });
  } catch (error) {
    next(new HttpError("There is some server internal error", 422));
    return;
  }

  res.json(validCartList);
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authId = req.auth!.payload.sub;

  let validAuthId;

  try {
    validAuthId = parse(authIdSchema, authId);
  } catch (error) {
    next(new HttpError("AuthId required", 422));
    return;
  }

  let user;
  try {
    user = await prisma.user.findUnique({
      where: {
        auth: validAuthId,
      },
    });
  } catch (error) {
    next(new HttpError("There is some error in the database.", 500));
    return;
  }

  try {
    await prisma.deleteUser.create({
      data: {
        auth: validAuthId,
      },
    });
  } catch (error) {
    next(new HttpError("There is some error in the database.", 500));
    return;
  }

  sendMail({
    to: process.env.PERSONAL_EMAIL!,
    subject: "delete user",
    text: `Delete user by the id : ${validAuthId}`,
    html: "",
  });

  sendMail({
    to: user!.email,
    subject: "Account Delete",
    text: "Your account will be delete shortly from GWH.",
    html: deleteMessage(user!.name),
  });

  res.status(204).json("Deleted");
};
