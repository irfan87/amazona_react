import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrderScreen = (props) => {
	const cart = useSelector((state) => state.cart);

	if (!cart.paymentMethods) {
		props.history.push("/payment");
	}

	const toPrice = (num) => Number(num.toFixed(2));

	cart.itemsPrice = toPrice(
		cart.cartItems.reduce((a, c) => a + c.qty + c.price, 0)
	);

	cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);

	cart.taxPrice = toPrice(0.15 * cart.itemsPrice);

	cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

	const placeOrderHandler = (e) => {
		e.preventDefault();

		// TODO: dispatch place order action
	};

	return (
		<div>
			<CheckoutSteps stepOne stepTwo stepThree stepFour />
			<div className="row top">
				<div className="col-2">
					<ul>
						<li>
							<div className="card card-body">
								<h2>Shipping</h2>
								<p>
									<strong>Name:</strong>
									<p>{cart.shippingDetails.fullName}</p>
									<br />
									<strong>Address:</strong>{" "}
									<p>
										{cart.shippingDetails.address}, {cart.shippingDetails.city},{" "}
										{cart.shippingDetails.postCode},{" "}
										{cart.shippingDetails.country}
									</p>
								</p>
							</div>
						</li>
						<li>
							<div className="card card-body">
								<h2>Shipping</h2>
								<p>
									<strong>Method:</strong>
									<p>{cart.paymentMethods}</p>
								</p>
							</div>
						</li>
						<li>
							<div className="card card-body">
								<h2>Order Items</h2>
								<ul>
									{cart.cartItems.map((item) => (
										<li key={item.product}>
											<div className="row">
												<div>
													<img
														src={item.image}
														alt={item.name}
														className="small"
													/>
												</div>
												<div className="min-30">
													<Link to={`/product/${item.product}`}>
														{item.name}
													</Link>
												</div>
												<div>
													{item.qty} x $ {item.price} = {item.qty * item.price}
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</li>
					</ul>
				</div>
				<div className="col-1">
					<div className="card card-body">
						<ul>
							<li>
								<h1>Order Summary</h1>
							</li>
							<li>
								<div className="row">
									<div>Items</div>
									<div>$ {cart.itemsPrice.toFixed(2)}</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>Shipping</div>
									<div>$ {cart.shippingPrice.toFixed(2)}</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>Tax</div>
									<div>$ {cart.taxPrice.toFixed(2)}</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>
										<strong>Order Total</strong>
									</div>
									<div>
										<strong>$ {cart.totalPrice.toFixed(2)}</strong>
									</div>
								</div>
							</li>
							<li>
								<button
									type="button"
									onClick={placeOrderHandler}
									className="primary block"
									disabled={cart.cartItems.length === 0}
								>
									Place Order
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlaceOrderScreen;
