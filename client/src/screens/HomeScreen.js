import React, { useEffect, useState } from "react";
import Product from "../components/Product";

import axios from "axios";
import Loading from "../components/Loading";
import Message from "../components/Message";

const HomeScreen = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchProductsData = async () => {
			try {
				setLoading(true);

				const { data } = await axios.get("/api/products");

				setLoading(false);

				setProducts(data);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetchProductsData();
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<div className="row center">
					{products.map((product, index) => (
						<Product product={product} key={index} />
					))}
				</div>
			)}
		</>
	);
};

export default HomeScreen;
