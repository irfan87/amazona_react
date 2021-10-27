import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const CartScreen = (props) => {
	const productID = props.match.params.id;
	const qty = props.location.search
		? Number(props.location.search.split("=")[1])
		: 1;

	const dispatch = useDispatch();

	useEffect(() => {
		if (productID) {
			dispatch(addToCart(productID, qty));
		}
	}, [dispatch, productID, qty]);

	return (
		<div>
			<h1>Cart Screen</h1>
			<p>
				ADD TO CART: ProductID: {productID} Qty: {qty}
			</p>
		</div>
	);
};

export default CartScreen;
