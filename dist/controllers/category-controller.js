import { prisma } from "../prisma/prisma";
import { HttpError } from "../models/http-error";
export const categoryList = async (req, res, next) => {
    let categoryList = [];
    try {
        categoryList = await prisma.category.findMany();
    }
    catch (error) {
        next(new HttpError("There is some error in the server.", 500));
        return;
    }
    if (categoryList.length === 0) {
        next(new HttpError("No categories found", 404));
        return;
    }
    res.json(categoryList);
};
