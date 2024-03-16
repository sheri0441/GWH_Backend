"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add_order_to_database = void 0;
const generate_unique_id_1 = __importDefault(require("generate-unique-id"));
const prisma_1 = require("../prisma");
const client_1 = require("@prisma/client");
const add_order_to_database = async (validBody, totalPrice, user) => {
    try {
        let newOrder = await prisma_1.prisma.order.create({
            data: {
                orderNumber: (0, generate_unique_id_1.default)({
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
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                (0, exports.add_order_to_database)(validBody, totalPrice, user);
            }
        }
        throw error;
    }
};
exports.add_order_to_database = add_order_to_database;
//# sourceMappingURL=add_order_to_database.js.map