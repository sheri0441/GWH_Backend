import express from "express";
import { auth } from "express-oauth2-jwt-bearer";
import products from "./routes/products-route";
import category from "./routes/category-route";
import order from "./routes/order-route";
import user from "./routes/user-route";
import contact from "./routes/contact-route";
import stripe from "./routes/stripe-route";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
};

app.use(cors(corsOptions));

app.use(express.json());

const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_BASE_URL,
  tokenSigningAlg: process.env.AUTH0_TOKEN_ALG,
});

app.get("/", (req, res, next) => {
  res.status(200).json("server is working");
});

app.use("/products", products);

app.use("/images", express.static("assets"));

app.use("/category", category);

app.use("/order", order);

app.use("/contact", contact);

app.use("/stripe", stripe);

app.use("/user", jwtCheck, user);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("server is connected."));
