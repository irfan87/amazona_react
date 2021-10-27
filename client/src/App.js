import { BrowserRouter, Link, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";

function App() {
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
						<a href="/cart">Cart</a>
						<a href="/signin">Sign In</a>
					</div>
				</header>
				<main>
					<Route path="/" component={HomeScreen} exact />
					<Route path="/product/:id" component={ProductDetailScreen} />
					<Route path="/cart/:id?" component={CartScreen} />
				</main>
				<footer className="row center">All Right Reserved</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
