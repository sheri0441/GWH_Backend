import { Request, Response, NextFunction } from "express";
import { prisma } from "../prisma.js";
import { HttpError } from "../models/http-error.js";
import { category } from "../interfaces/Category.js";

export const categoryList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let categoryList: category[] = [];
  try {
    categoryList = await prisma.category.findMany();
  } catch (error) {
    next(new HttpError("There is some error in the server.", 500));
    return;
  }

  if (categoryList.length === 0) {
    next(new HttpError("No categories found", 404));
    return;
  }

  res.json(categoryList);
};
