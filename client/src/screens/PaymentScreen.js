import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethods } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = (props) => {
	const cart = useSelector((state) => state.cart);
	const { shippingDetails } = cart;

	if (!shippingDetails.address) {
		props.history.push("/shipping");
	}

	const [paymentMethod, setPaymentMethod] = useState("PayPal");

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(savePaymentMethods(paymentMethod));

		props.history.push("/placeorder");
	};

	return (
		<div>
			<CheckoutSteps stepOne stepTwo stepThree />
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Payment Methods</h1>
				</div>
				<div>
					<div>
						<input
							type="radio"
							name="paymentMethod"
							id="paypal"
							value="PayPal"
							required
							checked
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
						<label htmlFor="paypal">PayPal</label>
					</div>
				</div>
				<div>
					<div>
						<input
							type="radio"
							name="paymentMethod"
							id="stripe"
							value="Stripe"
							required
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
						<label htmlFor="stripe">Stripe</label>
					</div>
				</div>
				<div>
					<button className="primary" type="submit">
						Continue
					</button>
				</div>
			</form>
		</div>
	);
};

export default PaymentScreen;
