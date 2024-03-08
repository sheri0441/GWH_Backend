import express from "express";
import { categoryList } from "../controllers/category-controller";

const router = express.Router();

router.get("/", categoryList);

export default router;
