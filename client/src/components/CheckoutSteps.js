import React from "react";

const CheckoutSteps = (props) => {
	return (
		<div className="row checkout-steps">
			<div className={props.stepOne ? "active" : ""}>Sign In</div>
			<div className={props.stepTwo ? "active" : ""}>Shipping</div>
			<div className={props.stepThree ? "active" : ""}>Payment Method</div>
			<div className={props.stepFour ? "active" : ""}>Place Order</div>
		</div>
	);
};

export default CheckoutSteps;
