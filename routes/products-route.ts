import express from "express";
import {
  getFeaturedProductList,
  getProductById,
  getProductList,
  getProductListByCategory,
  cartProducts,
  getRecentProduct,
  getProductsBySearch,
  getProductsBySearchForPage,
} from "../controllers/product-controller";

const router = express.Router();

router.get("/page/:page", getProductList);

router.get("/id/:id", getProductById);

router.get("/category/:category/:page", getProductListByCategory);

router.get("/search/:search", getProductsBySearch);

router.get("/searchpage/:search/:page", getProductsBySearchForPage);

router.get("/featured", getFeaturedProductList);

router.get("/recent", getRecentProduct);

router.post("/cart", cartProducts);

export default router;
