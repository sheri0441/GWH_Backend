import express from "express";
import { checkoutPage } from "../controllers/stripe-controller";

const router = express.Router();

router.post("/api/create-checkout-session", checkoutPage);

export default router;
