import React from "react";
import Product from "../components/Product";
import data from "../data";

const HomeScreen = () => {
	const { products } = data;

	return (
		<div className="row center">
			{products.map((product, index) => (
				<Product product={product} key={index} />
			))}
		</div>
	);
};

export default HomeScreen;
