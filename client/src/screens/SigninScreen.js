import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signin } from "../actions/userActions";
import Loading from "../components/Loading";
import Message from "../components/Message";

const SigninScreen = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const redirect = props.location.search
		? props.location.search.split("=")[1]
		: "/";

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo, loading, error } = userSignin;

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(signin(email, password));
	};

	useEffect(() => {
		if (userInfo) {
			props.history.push(redirect);
		}
	}, [props.history, redirect, userInfo]);

	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Sign In</h1>
					{loading && <Loading />}
					{error && <Message variant="danger">{error}</Message>}
				</div>
				<div>
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						id="email"
						placeholder="Enter your email address"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						placeholder="Enter your password"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<label />
					<button type="submit" className="primary">
						Sign In
					</button>
				</div>
				<div>
					<label />
					<div>
						New Customer? <Link to="/register">Create Your Account</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SigninScreen;
