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

// when user have authorized to access, generate order
export const isAuth = (req, res, next) => {
	const authorization = req.headers.authorization;

	if (authorization) {
		const token = authorization.slice(7, authorization.length);

		jwt.verify(
			token,
			isAuth,
			process.env.JWT_SECRET || "pL34s3D0NtSh4r3",
			(err, decode) => {
				if (err) {
					res.status(401).send({ message: "Invalid token" });
				} else {
					req.user = decode;

					next();
				}
			}
		);
	} else {
		res.status(401).send({ message: "No token" });
	}
};
