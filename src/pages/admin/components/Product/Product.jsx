import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
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
	}, [pagination]);
	return (
		<>
			<p className="text-xl text-gray-600 font-semibold p-2 ml-5">Products</p>
			<div className="bg-white mx-5 rounded-2xl">
				<div className="flex justify-end mt-3">
					<div className="p-2 pr-20">
						<SearchBar
							setProductsCallback={setProductsCallback}
							pagination={pagination}
							placeHolder="Search product"
						/>
					</div>
				</div>
				<div className="p-4">
					<ProductTable products={products} />
				</div>
			</div>
		</>
	);
};

export default Product;
