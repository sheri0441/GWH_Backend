"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controllers/order-controller");
const router = express_1.default.Router();
router.post("/cash", order_controller_1.orderCashHandler);
router.post("/card", order_controller_1.orderCardHandler);
router.get("/:orderNumber", order_controller_1.getOrderDetail);
exports.default = router;
//# sourceMappingURL=order-route.js.map