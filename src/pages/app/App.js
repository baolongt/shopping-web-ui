import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from "react-router";
import Header from "./components/Header.jsx";
import ProductDetail from "./ProductDetail/ProductDetail.jsx";
import ProductPage from "./ProductPage/ProductPage";
function App() {
	const [category, setCategory] = useState([]);
	useEffect(() => {
		const getCategory = async () => {
			let url =
				process.env.REACT_APP_ENV.trim() === "dev"
					? process.env.REACT_APP_BACKEND_API_URL_DEV
					: "";
			let getCategoryURL = url + "/category/getAll";
			let response = await axios.get(getCategoryURL);
			if (response.data.successCode == "RETRIEVE_CATEGORY_SUCCESS") {
				setCategory(response.data.data);
			} else console.error(response.data.errorCode);
		};
		getCategory();
	}, []);
	return category.length == 0 ? (
		<></>
	) : (
		<>
			<Header category={category} />
			<div className="App">
				<Route path="/category/:category/:subCategory">
					<ProductPage category={category} />
				</Route>
				<Route path="/product/:id" component={ProductDetail} />
			</div>
		</>
	);
}

export default App;
