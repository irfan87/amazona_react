import express from "express";
import mongoose from "mongoose";

import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();

mongoose.connect(
	process.env.MONGODB_URL || "mongodb://localhost:27017/amazona"
);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Server is ready");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

app.listen(PORT, () => console.log(`Served at http://localhost:${PORT}`));
