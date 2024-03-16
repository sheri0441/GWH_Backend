"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product-controller");
const router = express_1.default.Router();
router.get("/page/:page", product_controller_1.getProductList);
router.get("/id/:id", product_controller_1.getProductById);
router.get("/category/:category/:page", product_controller_1.getProductListByCategory);
router.get("/search/:search", product_controller_1.getProductsBySearch);
router.get("/searchpage/:search/:page", product_controller_1.getProductsBySearchForPage);
router.get("/featured", product_controller_1.getFeaturedProductList);
router.get("/recent", product_controller_1.getRecentProduct);
router.post("/cart", product_controller_1.cartProducts);
exports.default = router;
//# sourceMappingURL=products-route.js.map