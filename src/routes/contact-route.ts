import express from "express";
import { contactHandler } from "../controllers/contact-controller";
const router = express.Router();

router.post("/", contactHandler);

export default router;
