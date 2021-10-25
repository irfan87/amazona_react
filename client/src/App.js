import Product from "./components/Product";
import data from "./data";

function App() {
	const { products } = data;

	return (
		<div className="grid-container">
			<header className="row">
				<div>
					<a className="brand" href="index.html">
						amazona
					</a>
				</div>
				<div>
					<a href="/cart">Cart</a>
					<a href="/signin">Sign In</a>
				</div>
			</header>
			<main>
				<div className="row center">
					{products.map((product, index) => (
						<Product product={product} key={index} />
					))}
				</div>
			</main>
			<footer className="row center">All Right Reserved</footer>
		</div>
	);
}

export default App;
