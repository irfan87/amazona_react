import React from "react";
import Rating from "./Rating";

const Product = ({ product }) => {
	const { _id, image, name, price, rating, numReviews } = product;

	return (
		<div>
			<div className="card" key={_id}>
				<a href={`/product/${_id}`}>
					<img className="medium" src={`${image}`} alt={`${name}`} />
				</a>
				<div className="card-body">
					<a href={`/product/${_id}`}>
						<h2>{name}</h2>
					</a>
					<Rating rating={rating} numReviews={numReviews} />
					<div className="price">$ {price}</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
