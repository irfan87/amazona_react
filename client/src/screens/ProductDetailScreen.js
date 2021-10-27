import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import Loading from "../components/Loading";
import Message from "../components/Message";
import Rating from "../components/Rating";

const ProductDetailScreen = (props) => {
	const dispatch = useDispatch();
	const productID = props.match.params.id;
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(detailsProduct(productID));
	}, [dispatch, productID]);

	return (
		<>
			{loading ? (
				<Loading />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<div>
					<Link to="/">Back to result</Link>
					<div className="row top">
						<div className="col-2">
							<img src={product.image} alt={product.name} className="large" />
						</div>
						<div className="col-1">
							<ul>
								<li>
									<h1>{product.name}</h1>
								</li>
								<li>
									<Rating
										rating={product.rating}
										numReviews={product.numReviews}
									/>
								</li>
								<li>Price: {`$${product.price}`}</li>
								<li>
									Description: <p>{product.description}</p>
								</li>
							</ul>
						</div>
						<div className="col-1">
							<div className="card card-body">
								<ul>
									<li>
										<div className="row">
											<div>Price</div>
											<div className="price">{`$${product.price}`}</div>
										</div>
									</li>
									<li>
										<div className="row">
											<div>Status</div>
											<div>
												{product.countInStock > 0 ? (
													<span className="success">
														In Stock ({product.countInStock})
													</span>
												) : (
													<span className="danger">Out of Stock</span>
												)}
											</div>
										</div>
									</li>
									<li>
										<button className="primary block">Add to Cart</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProductDetailScreen;
