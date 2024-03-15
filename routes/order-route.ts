import express from "express";
import {
  orderCashHandler,
  getOrderDetail,
  orderCardHandler,
} from "../controllers/order-controller";

const router = express.Router();

router.post("/cash", orderCashHandler);

router.post("/card", orderCardHandler);

router.get("/:orderNumber", getOrderDetail);

export default router;
