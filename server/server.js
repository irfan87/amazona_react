import express from "express";
import mongoose from "mongoose";

import data from "./data.js";
import userRouter from "./routers/userRouter.js";

const app = express();

mongoose.connect("mongodb://localhost:27017/amazona");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Server is ready");
});

// products' api
app.get("/api/products", (req, res) => {
	res.send(data.products);
});

// products' ID
app.get("/api/products/:id", (req, res) => {
	const product = data.products.find((x) => x._id === req.params.id);
	if (product) {
		res.send(product);
	} else {
		res.status(404).send({ message: "Product not found" });
	}
});

app.use("/api/users", userRouter);
app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

app.listen(PORT, () => console.log(`Served at http://localhost:${PORT}`));
