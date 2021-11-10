import { Route } from "react-router";
import Header from "./components/Header.jsx";
import ProductDetail from "./ProductDetail/ProductDetail.jsx";
import ProductPage from "./ProductPage/ProductPage";
function App() {
	return (
		<>
			<Header />
			<div className="App">
				<Route
					path="/category/:category/:subCategory"
					component={ProductPage}
				/>
				<Route path="/product/:id" component={ProductDetail} />
			</div>
		</>
	);
}

export default App;
