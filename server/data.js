import bcrypt from "bcryptjs";

const data = {
	users: [
		{
			name: "Jon Doe",
			email: "admin@test.com",
			password: bcrypt.hashSync("admin1234", 8),
			isAdmin: true,
		},
		{
			name: "Jane Doe",
			email: "jane_doe@test.com",
			password: bcrypt.hashSync("janedoe1234", 8),
			isAdmin: false,
		},
	],
	products: [
		{
			name: "Nike Slim Shirt",
			category: "Shirts",
			image: "/images/product-1.jpg",
			price: 120,
			brand: "Nike",
			rating: 4.5,
			numReviews: 10,
			description: "high quality shirt.",
			countInStock: 10,
		},
		{
			name: "Adidas Sweat Shirt",
			category: "Shirts",
			image: "/images/product-2.jpg",
			price: 100,
			brand: "Adidas",
			rating: 4.0,
			numReviews: 10,
			description: "high quality shirt.",
			countInStock: 3,
		},
		{
			name: "Lacoste Free Shirt",
			category: "Shirts",
			image: "/images/product-3.jpg",
			price: 220,
			brand: "Lacoste",
			rating: 4.0,
			numReviews: 17,
			description: "high quality shirt.",
			countInStock: 5,
		},
		{
			name: "Champion Slim Pant",
			category: "Pants",
			image: "/images/product-4.jpg",
			price: 70,
			brand: "Champion",
			rating: 4.5,
			numReviews: 14,
			description: "high quality shirt.",
			countInStock: 7,
		},
		{
			name: "Puma Slim Pant",
			category: "Pants",
			image: "/images/product-5.jpg",
			price: 165,
			brand: "Puma",
			rating: 3.0,
			numReviews: 10,
			description: "high quality shirt.",
			countInStock: 2,
		},
		{
			name: "Adidas Fit Pant",
			category: "Pants",
			image: "/images/product-6.jpg",
			price: 120,
			brand: "Adidas",
			rating: 4.5,
			numReviews: 10,
			description: "high quality shirt.",
			countInStock: 5,
		},
		{
			name: "Lacoste Casual Shirt",
			category: "Shirt",
			image: "/images/p1.jpg",
			price: 120,
			brand: "Lacoste",
			rating: 4.5,
			numReviews: 10,
			description: "high quality shirt.",
			countInStock: 0,
		},
	],
};

export default data;
