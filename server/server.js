import express from "express";
import data from "./data.js";

const app = express();

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

app.listen(PORT, () => console.log(`Served at http://localhost:${PORT}`));
