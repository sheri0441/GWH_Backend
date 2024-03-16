"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUserCart = exports.userAndCartHandler = void 0;
const valibot_1 = require("valibot");
const user_js_1 = require("../validationSchema/user.js");
const http_error_js_1 = require("../models/http-error.js");
const prisma_js_1 = require("../prisma.js");
const cart_js_1 = require("../validationSchema/cart.js");
const auth_js_1 = require("../validationSchema/auth.js");
const nodemailer_js_1 = require("../util/nodemailer.js");
const deleteMessage_1 = require("../email_template/deleteMessage");
const userAndCartHandler = async (req, res, next) => {
    const body = req.body;
    const authId = req.auth.payload.sub;
    let validAuthId;
    try {
        validAuthId = (0, valibot_1.parse)(auth_js_1.authIdSchema, authId);
    }
    catch (error) {
        next(new http_error_js_1.HttpError("AuthId required", 422));
        return;
    }
    let validUser;
    try {
        validUser = (0, valibot_1.parse)(user_js_1.userSchema, body);
    }
    catch (error) {
        next(new http_error_js_1.HttpError("There is some error in your user  data", 422));
        return;
    }
    const { email, name, image } = validUser;
    let user;
    try {
        user = await prisma_js_1.prisma.user.findUnique({
            where: { email: email },
        });
    }
    catch (error) {
        next(new http_error_js_1.HttpError("There is some error in the backend.", 422));
        return;
    }
    if (!user) {
        let newUser;
        try {
            newUser = await prisma_js_1.prisma.user.create({
                data: {
                    name: name,
                    image: image || "",
                    email: email,
                    cart: [],
                    auth: validAuthId,
                },
            });
        }
        catch (error) {
            next(new http_error_js_1.HttpError("There is some error in the backend.", 422));
            return;
        }
        res.json({ cart: newUser.cart, id: newUser.id });
    }
    else {
        res.json({ cart: user.cart, id: user.id });
    }
};
exports.userAndCartHandler = userAndCartHandler;
const updateUserCart = async (req, res, next) => {
    const { cart } = req.body;
    const authId = req.auth.payload.sub;
    let validAuthId;
    try {
        validAuthId = (0, valibot_1.parse)(auth_js_1.authIdSchema, authId);
    }
    catch (error) {
        next(new http_error_js_1.HttpError("There is some validation error related to email.", 422));
        return;
    }
    let validCartList;
    try {
        validCartList = (0, valibot_1.parse)(cart_js_1.cartSchema, cart);
    }
    catch (error) {
        next(new http_error_js_1.HttpError("AuthId required", 422));
        return;
    }
    let user;
    try {
        user = await prisma_js_1.prisma.user.findUnique({
            where: {
                auth: validAuthId,
            },
        });
    }
    catch (error) {
        next(new http_error_js_1.HttpError("There is some server internal error", 422));
        return;
    }
    if (!user) {
        next(new http_error_js_1.HttpError("You are not registered on our website.", 404));
        return;
    }
    let updatedUser;
    try {
        updatedUser = await prisma_js_1.prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                cart: JSON.stringify(validCartList),
            },
        });
    }
    catch (error) {
        next(new http_error_js_1.HttpError("There is some server internal error", 422));
        return;
    }
    res.json(validCartList);
};
exports.updateUserCart = updateUserCart;
const deleteUser = async (req, res, next) => {
    const authId = req.auth.payload.sub;
    let validAuthId;
    try {
        validAuthId = (0, valibot_1.parse)(auth_js_1.authIdSchema, authId);
    }
    catch (error) {
        next(new http_error_js_1.HttpError("AuthId required", 422));
        return;
    }
    let user;
    try {
        user = await prisma_js_1.prisma.user.findUnique({
            where: {
                auth: validAuthId,
            },
        });
    }
    catch (error) {
        next(new http_error_js_1.HttpError("There is some error in the database.", 500));
        return;
    }
    try {
        await prisma_js_1.prisma.deleteUser.create({
            data: {
                auth: validAuthId,
            },
        });
    }
    catch (error) {
        next(new http_error_js_1.HttpError("There is some error in the database.", 500));
        return;
    }
    (0, nodemailer_js_1.sendMail)({
        to: process.env.PERSONAL_EMAIL,
        subject: "delete user",
        text: `Delete user by the id : ${validAuthId}`,
        html: "",
    });
    (0, nodemailer_js_1.sendMail)({
        to: user.email,
        subject: "Account Delete",
        text: "Your account will be delete shortly from GWH.",
        html: (0, deleteMessage_1.deleteMessage)(user.name),
    });
    res.status(204).json("Deleted");
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user-controller.js.map