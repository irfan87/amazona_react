import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../actions/userActions";
import Loading from "../components/Loading";
import Message from "../components/Message";

const RegisterScreen = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const redirect = props.location.search
		? props.location.search.split("=")[1]
		: "/";

	const userRegister = useSelector((state) => state.userRegister);
	const { userInfo, loading, error } = userRegister;

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Password and confirm password are not matched");
		} else {
			dispatch(register(name, email, password));
		}
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
					<h1>Create New Account</h1>
					{loading && <Loading />}
					{error && <Message variant="danger">{error}</Message>}
				</div>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						placeholder="Enter your name"
						required
						onChange={(e) => setName(e.target.value)}
					/>
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
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type="password"
						id="confirmPassword"
						placeholder="Enter your confirmation password"
						required
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				<div>
					<label />
					<button type="submit" className="primary">
						Register
					</button>
				</div>
				<div>
					<label />
					<div>
						Already have the account?{" "}
						<Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default RegisterScreen;
