import {
	CART_ADD_ITEM,
	CART_EMPTY,
	CART_REMOVE_ITEM,
	CART_SAVE_PAYMENT_METHODS,
	CART_SAVE_SHIPPING_DETAILS,
} from "../constants/cartConstants";

export const cartReducer = (
	state = {
		cartItems: [],
	},
	action
) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;
			const existItem = state.cartItems.find((x) => x.product === item.product);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === existItem.product ? item : x
					),
				};
			} else {
				return { ...state, cartItems: [...state.cartItems, item] };
			}
		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.product !== action.payload),
			};
		case CART_SAVE_SHIPPING_DETAILS:
			return {
				...state,
				shippingDetails: action.payload,
			};
		case CART_SAVE_PAYMENT_METHODS:
			return {
				...state,
				paymentMethods: action.payload,
			};
		case CART_EMPTY:
			return { ...state, cartItems: [] };
		default:
			return state;
	}
};
