import React from "react";
import { Link } from "react-router-dom";

import Rating from "./Rating";

const Product = ({ product }) => {
	const { _id, image, name, price, rating, numReviews } = product;

	return (
		<div>
			<div className="card" key={_id}>
				<Link to={`/product/${_id}`}>
					<img className="medium" src={`${image}`} alt={`${name}`} />
				</Link>
				<div className="card-body">
					<Link to={`/product/${_id}`}>
						<h2>{name}</h2>
					</Link>
					<Rating rating={rating} numReviews={numReviews} />
					<div className="price">$ {price}</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
