import express from "express";
import asyncHandler from "express-async-handler";

import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

// send the products' data to the front end
productRouter.get(
	"/",
	asyncHandler(async (req, res) => {
		const products = await Product.find({});

		res.send(products);
	})
);

productRouter.get(
	"/seed",
	asyncHandler(async (req, res) => {
		const createdProducts = await Product.insertMany(data.products);

		res.send({ createdProducts });
	})
);

productRouter.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);

		if (product) {
			res.send(product);
		} else {
			res.status(404).send({ message: "Product not found!" });
		}
	})
);

export default productRouter;
