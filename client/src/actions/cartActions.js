import Axios from "axios";
import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	CART_SAVE_PAYMENT_METHODS,
	CART_SAVE_SHIPPING_DETAILS,
} from "../constants/cartConstants";

export const addToCart = (productID, qty) => async (dispatch, getState) => {
	const { data } = await Axios.get(`/api/products/${productID}`);

	dispatch({
		type: CART_ADD_ITEM,
		payload: {
			name: data.name,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			product: data._id,
			qty,
		},
	});

	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productID) => async (dispatch, getState) => {
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: productID,
	});

	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingDetails = (data) => async (dispatch, getState) => {
	dispatch({ type: CART_SAVE_SHIPPING_DETAILS, payload: data });

	localStorage.setItem("shippingDetails", JSON.stringify(data));
};

export const savePaymentMethods = (data) => async (dispatch, getState) => {
	dispatch({ type: CART_SAVE_PAYMENT_METHODS, payload: data });
};
