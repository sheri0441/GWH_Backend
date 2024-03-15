import express from "express";
import {
  userAndCartHandler,
  updateUserCart,
  deleteUser,
} from "../controllers/user-controller.ts";

const router = express.Router();

router.post("/", userAndCartHandler);

router.delete("/", deleteUser);

router.put("/cart", updateUserCart);

export default router;
