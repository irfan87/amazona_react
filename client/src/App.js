import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import SigninScreen from "./screens/SigninScreen";

function App() {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="row">
					<div>
						<Link className="brand" to="/">
							amazona
						</Link>
					</div>
					<div>
						<Link to="/cart">
							Cart{" "}
							{cartItems.length > 0 && (
								<span className="badge">{cartItems.length}</span>
							)}
						</Link>
						<Link to="/signin">Sign In</Link>
					</div>
				</header>
				<main>
					<Route path="/" component={HomeScreen} exact />
					<Route path="/signin" component={SigninScreen} />
					<Route path="/product/:id" component={ProductDetailScreen} />
					<Route path="/cart/:id?" component={CartScreen} />
				</main>
				<footer className="row center">All Right Reserved</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
