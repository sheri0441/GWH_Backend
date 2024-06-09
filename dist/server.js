"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_oauth2_jwt_bearer_1 = require("express-oauth2-jwt-bearer");
const products_route_1 = __importDefault(require("./routes/products-route"));
const category_route_1 = __importDefault(require("./routes/category-route"));
const order_route_1 = __importDefault(require("./routes/order-route"));
const user_route_1 = __importDefault(require("./routes/user-route"));
const contact_route_1 = __importDefault(require("./routes/contact-route"));
const cors_1 = __importDefault(require("cors"));
const order_controller_1 = require("./controllers/order-controller");
const app = (0, express_1.default)();
const corsOptions = {
    origin: process.env.FRONTEND_URL,
};
app.use((0, cors_1.default)(corsOptions));
app.post("/stripe/webhook", express_1.default.raw({ type: "application/json" }), order_controller_1.stripePaymentStatus);
app.use(express_1.default.json());
const jwtCheck = (0, express_oauth2_jwt_bearer_1.auth)({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_BASE_URL,
    tokenSigningAlg: process.env.AUTH0_TOKEN_ALG,
});
app.get("/", (req, res, next) => {
    res.status(200).json("server is working");
});
app.use("/products", products_route_1.default);
app.use("/category", category_route_1.default);
app.use("/order", order_route_1.default);
app.use("/contact", contact_route_1.default);
app.use("/user", jwtCheck, user_route_1.default);
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.code || 500);
    res.json({ message: err.message || "An unknown err occurred" });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    setInterval(async () => {
        const data = await fetch("https://gwh-backend.onrender.com");
        const result = await data.json();
        console.log(result);
    }, 60000);
});
//# sourceMappingURL=server.js.map