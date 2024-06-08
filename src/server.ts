import express, { NextFunction, Request, Response } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import products from "./routes/products-route";
import category from "./routes/category-route";
import order from "./routes/order-route";
import user from "./routes/user-route";
import contact from "./routes/contact-route";
import cors from "cors";
import { stripePaymentStatus } from "./controllers/order-controller";

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
};

app.use(cors(corsOptions));

app.post(
  "/stripe/webhook",
  express.raw({ type: "application/json" }),
  stripePaymentStatus
);

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

app.use("/category", category);

app.use("/order", order);

app.use("/contact", contact);

app.use("/user", jwtCheck, user);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.code || 500);
  res.json({ message: err.message || "An unknown err occurred" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  setInterval(() => {
    console.log("server is working");
  }, 60000);
});
