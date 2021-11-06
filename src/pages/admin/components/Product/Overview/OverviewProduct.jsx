import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
const OverviewProduct = () => {
	const [products, setProducts] = useState([]);
	const [pagination, setPagination] = useState({
		currentPage: 0,
		totalPages: 0,
		offset: 10
	});

	const setProductsCallback = useCallback((products) => {
		setProducts(products);
	}, []);

	useEffect(() => {
		async function getProduct() {
			let url =
				process.env.REACT_APP_ENV.trim() === "dev"
					? process.env.REACT_APP_BACKEND_API_URL_DEV
					: "";
			let response = await axios
				.get(url + "/product/getAll", {
					params: {
						page: pagination.currentPage,
						offset: pagination.offset
					}
				})
				.catch((e) => {
					console.error(e);
				});
			let data = await response.data.data;
			let products = await data.content;
			let totalPages = await data.totalPages;
			setProducts(products);
			setPagination({ ...pagination, totalPages });
		}
		getProduct();
	}, []);
	return (
		<>
			<div className="my-3 ml-3">
				<SearchBar
					setProductsCallback={setProductsCallback}
					pagination={pagination}
					placeHolder="Search product"
				/>
			</div>
			<div>
				<ProductTable products={products} />
			</div>
		</>
	);
};

export default OverviewProduct;
