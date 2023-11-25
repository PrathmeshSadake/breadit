import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

import authRoutes from "./routes/auth.js";
import orderRoute from "./routes/order.js";
import productRoute from "./routes/product.js";
import paymentRoute from "./routes/payment.js";

const app = express();
app.use(express.json());

app.use("/api/v1", authRoutes);
app.use("/api/v1", productRoute);
app.use("/api/v1", paymentRoute);
app.use("/api/v1", orderRoute);

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log(`Server is not running on port ${PORT}`);
  });
