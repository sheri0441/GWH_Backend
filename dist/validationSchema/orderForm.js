"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderForm = void 0;
const v = __importStar(require("valibot"));
exports.orderForm = v.object({
    name: v.string([v.minLength(3, "Name must be at least 3 characters long")]),
    email: v.string([
        v.minLength(1, "Please provide your e-mail address"),
        v.email("Please enter a valid e-mail address"),
    ]),
    city: v.string([v.minLength(1, "City is required")]),
    area: v.string([v.minLength(1, "Please add you area")]),
    address: v.string([v.minLength(1, "Please provide your address")]),
    shipping: v.string([v.minLength(1, "Please select a shipping method")]),
    payment: v.string([v.minLength(1, "Please add your paymentMethod")]),
    onlineMethod: v.optional(v.string(), "The person will pay in cash."),
    instructions: v.optional(v.string(), "No special instructions for us."),
    productList: v.array(v.object({
        productId: v.string([v.minLength(1, "Please add  the product id")]),
        quantity: v.number([
            v.minValue(1, "Please add your product quantity to 1 minimum."),
        ]),
    })),
    zip: v.string([
        v.minLength(1, "Please add zip code."),
        v.regex(/^\d{5}(-\d{4})?$/, "Please add valid zipcode"),
    ]),
});
//# sourceMappingURL=orderForm.js.map