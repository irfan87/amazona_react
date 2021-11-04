import express from "express";
import asyncHandler from "express-async-handler";

import data from "../data.js";
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.get(
	"/seed",
	asyncHandler(async (req, res) => {
		// const user = data.users;

		// const createdUsers = await User.insertMany(user)
		// 	.then(() => console.log("data inserted"))
		// 	.catch((error) => console.error(error));

		// create user
		const createdUsers = await User.insertMany(data.users);

		res.send({ createdUsers });
	})
);

export default userRouter;
