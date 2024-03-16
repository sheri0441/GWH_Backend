"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryList = void 0;
const prisma_js_1 = require("../prisma/prisma.js");
const http_error_js_1 = require("../models/http-error.js");
const categoryList = async (req, res, next) => {
    let categoryList = [];
    try {
        categoryList = await prisma_js_1.prisma.category.findMany();
    }
    catch (error) {
        next(new http_error_js_1.HttpError("There is some error in the server.", 500));
        return;
    }
    if (categoryList.length === 0) {
        next(new http_error_js_1.HttpError("No categories found", 404));
        return;
    }
    res.json(categoryList);
};
exports.categoryList = categoryList;
//# sourceMappingURL=category-controller.js.map