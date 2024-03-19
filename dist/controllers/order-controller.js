"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderDetail = exports.stripePaymentStatus = exports.orderCardHandler = exports.orderCashHandler = void 0;
const valibot_1 = require("valibot");
const prisma_1 = require("../prisma");
const orderForm_1 = require("../validationSchema/orderForm");
const http_error_1 = require("../models/http-error");
const nodemailer_1 = require("../util/nodemailer");
const order_confirmation_1 = require("../email_template/order_confirmation");
const remove_repeated_products_1 = require("../util/remove_repeated_products");
const reduce_data_to_orderProducts_1 = require("../util/reduce_data_to_orderProducts");
const add_order_to_database_1 = require("../util/add_order_to_database");
const calculate_orderProducts_total_price_1 = require("../util/calculate_orderProducts_total_price");
const find_user_1 = require("../util/find_user");
const get_productList_id_1 = require("../util/get_productList_id");
const stripe_1 = __importDefault(require("stripe"));
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY);
const orderCashHandler = async (req, res, next) => {
    const body = req.body;
    let validBody;
    try {
        validBody = (0, valibot_1.parse)(orderForm_1.orderForm, body);
    }
    catch (error) {
        next(new http_error_1.HttpError("Validation Error", 500));
        return;
    }
    const { email, productList } = validBody;
    const newProductList = (0, remove_repeated_products_1.remove_repeated_products)(productList);
    let productIdArray = (0, get_productList_id_1.get_productList_id)(newProductList);
    if (productIdArray.length < 1) {
        next(new http_error_1.HttpError("Please add product to your order.", 400));
        return;
    }
    let productInStockThatMatch = [];
    try {
        productInStockThatMatch = await prisma_1.prisma.product.findMany({
            where: {
                id: { in: productIdArray },
            },
        });
    }
    catch (error) {
        console.log(error);
        next(new http_error_1.HttpError("Provide correct product with correct ID", 400));
        return;
    }
    const numberOfProductsInOrder = newProductList.length;
    const isForeignItemFound = productInStockThatMatch.length !== numberOfProductsInOrder;
    if (isForeignItemFound) {
        next(new http_error_1.HttpError(`Error in product ID. ${numberOfProductsInOrder - productInStockThatMatch.length} product/s is/are unknown to us.`, 400));
        return;
    }
    let user;
    try {
        user = await (0, find_user_1.find_user)(email);
    }
    catch (error) {
        next(new http_error_1.HttpError("There is server internal issue related to email.", 400));
        return;
    }
    let orderProductList = (0, reduce_data_to_orderProducts_1.reduce_data_to_orderProducts)(productInStockThatMatch, newProductList);
    const totalPrice = (0, calculate_orderProducts_total_price_1.calculate_orderProducts_total_price)(orderProductList);
    let newOrder;
    try {
        newOrder = await (0, add_order_to_database_1.add_order_to_database)(validBody, totalPrice, user);
    }
    catch (error) {
        next(new http_error_1.HttpError("There is server internal issue related order. Please try again.", 500));
        return;
    }
    const mailText = `Dear ${newOrder.name}, your order has been received and will be processed as soon as possible. Your total bill is ${newOrder.price}`;
    const mailHtml = (0, order_confirmation_1.order_confirmation)(newOrder, orderProductList);
    (0, nodemailer_1.sendMail)({
        to: newOrder.email,
        subject: "Order Confirmation",
        text: mailText,
        html: mailHtml,
    }).catch((err) => console.log(err));
    res.json({
        message: "Order created successfully.",
        orderNumber: newOrder.orderNumber,
    });
};
exports.orderCashHandler = orderCashHandler;
const orderCardHandler = async (req, res, next) => {
    const body = req.body;
    let validBody;
    try {
        validBody = (0, valibot_1.parse)(orderForm_1.orderForm, body);
    }
    catch (error) {
        next(new http_error_1.HttpError("Validation Error", 500));
        return;
    }
    const { email, productList } = validBody;
    const newProductList = (0, remove_repeated_products_1.remove_repeated_products)(productList);
    let productIdArray = (0, get_productList_id_1.get_productList_id)(newProductList);
    if (productIdArray.length < 1) {
        next(new http_error_1.HttpError("Please add product to your order.", 400));
        return;
    }
    let productInStockThatMatch = [];
    try {
        productInStockThatMatch = await prisma_1.prisma.product.findMany({
            where: {
                id: { in: productIdArray },
            },
        });
    }
    catch (error) {
        console.log(error);
        next(new http_error_1.HttpError("Provide correct product with correct ID", 400));
        return;
    }
    const numberOfProductsInOrder = newProductList.length;
    const isForeignItemFound = productInStockThatMatch.length !== numberOfProductsInOrder;
    if (isForeignItemFound) {
        next(new http_error_1.HttpError(`Error in product ID. ${numberOfProductsInOrder - productInStockThatMatch.length} product/s is/are unknown to us.`, 400));
        return;
    }
    let user;
    try {
        user = await (0, find_user_1.find_user)(email);
    }
    catch (error) {
        next(new http_error_1.HttpError("There is server internal issue related to email.", 400));
        return;
    }
    let orderProductList = (0, reduce_data_to_orderProducts_1.reduce_data_to_orderProducts)(productInStockThatMatch, newProductList);
    const totalPrice = (0, calculate_orderProducts_total_price_1.calculate_orderProducts_total_price)(orderProductList);
    let newOrder;
    try {
        newOrder = await (0, add_order_to_database_1.add_order_to_database)(validBody, totalPrice, user);
    }
    catch (error) {
        next(new http_error_1.HttpError("There is server internal issue related order. Please try again.", 500));
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
exports.orderCardHandler = orderCardHandler;
const stripePaymentStatus = async (req, res, next) => {
    const sig = req.headers["stripe-signature"];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    }
    catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }
    if (event.type === "checkout.session.completed") {
        const checkoutCompleted = event.data.object;
        if (checkoutCompleted.payment_status === "paid") {
            const order = await prisma_1.prisma.order.update({
                where: {
                    orderNumber: checkoutCompleted.client_reference_id,
                },
                data: {
                    paymentStatus: "paid",
                },
            });
            const productList = JSON.parse(order.productList);
            let productIdArray = (0, get_productList_id_1.get_productList_id)(productList);
            let productInStockThatMatch = [];
            productInStockThatMatch = await prisma_1.prisma.product.findMany({
                where: {
                    id: { in: productIdArray },
                },
            });
            let orderProductList = (0, reduce_data_to_orderProducts_1.reduce_data_to_orderProducts)(productInStockThatMatch, productList);
            const mailText = `Dear ${order.name}, your order has been received and will be processed as soon as possible. Your total bill is ${order.price}`;
            const mailHtml = (0, order_confirmation_1.order_confirmation)(order, orderProductList);
            (0, nodemailer_1.sendMail)({
                to: order.email,
                subject: "Order Confirmation",
                text: mailText,
                html: mailHtml,
            }).catch((err) => console.log(err));
        }
    }
    res.send();
};
exports.stripePaymentStatus = stripePaymentStatus;
const getOrderDetail = async (req, res, next) => {
    const { orderNumber } = req.params;
    const order = await prisma_1.prisma.order.findUnique({
        where: {
            orderNumber: orderNumber,
        },
    });
    if (!order) {
        next(new http_error_1.HttpError("Order not found.", 404));
        return;
    }
    res.json({ status: order.status, total: order.price });
};
exports.getOrderDetail = getOrderDetail;
//# sourceMappingURL=order-controller.js.map