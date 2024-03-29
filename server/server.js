import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
	process.env.MONGODB_URL || "mongodb://localhost:27017/amazona"
);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Server is ready");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

app.listen(PORT, () => console.log(`Served at http://localhost:${PORT}`));
