import jwt from "jsonwebtoken";

// generate token automatically
export const generateToken = (user) => {
	return jwt.sign(
		{
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		},
		process.env.JWT_SECRET || "pL34s3D0NtSh4r3",
		{
			expiresIn: "30d",
		}
	);
};
