import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../components/Loading";
import Product from "../components/Product";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);

	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

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
