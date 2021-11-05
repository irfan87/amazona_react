import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingDetails } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingAddressScreen = (props) => {
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	const cart = useSelector((state) => state.cart);
	const { shippingDetails } = cart;

	if (!userInfo) {
		props.history.push("/signin");
	}

	const [fullName, setFullName] = useState(shippingDetails.fullName);
	const [address, setAddress] = useState(shippingDetails.address);
	const [city, setCity] = useState(shippingDetails.city);
	const [postCode, setPostCode] = useState(shippingDetails.postCode);
	const [country, setCountry] = useState(shippingDetails.country);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(
			saveShippingDetails({ fullName, address, city, postCode, country })
		);

		props.history.push("/payment");
	};

	return (
		<div>
			<CheckoutSteps stepOne stepTwo />
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Shipping Details</h1>
				</div>
				<div>
					<label htmlFor="fullName">Full Name</label>
					<input
						type="text"
						placeholder="Enter full name"
						id="fullName"
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="address">Address</label>
					<input
						type="text"
						placeholder="Enter address"
						id="address"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="city">City</label>
					<input
						type="text"
						placeholder="Enter city"
						id="city"
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="postCode">Post Code (Zip Code)</label>
					<input
						type="text"
						placeholder="Enter post code (zip code)"
						id="postCode"
						value={postCode}
						onChange={(e) => setPostCode(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="country">Country</label>
					<input
						type="text"
						placeholder="Enter country"
						id="country"
						value={country}
						onChange={(e) => setCountry(e.target.value)}
						required
					/>
				</div>
				<div>
					<label />
					<button className="primary" type="submit">
						Continue
					</button>
				</div>
			</form>
		</div>
	);
};

export default ShippingAddressScreen;
