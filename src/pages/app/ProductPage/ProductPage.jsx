import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Category from "./Category";
import Products from "./Products";

const ProductPage = (props) => {
	let { category, subCategory } = useParams();
	const [product, setProduct] = useState([]);
	useEffect(() => {
		const getProduct = async () => {
			let url =
				process.env.REACT_APP_ENV.trim() === "dev"
					? process.env.REACT_APP_BACKEND_API_URL_DEV
					: "";
			let getProductURL = url + "/product/getByCategory";
			const response = await axios.get(getProductURL, {
				params: {
					category: subCategory
				}
			});
			const data = await response.data.data.content;
			setProduct(data);
		};
		getProduct();
	}, [subCategory]);
	return (
		<div className="grid grid-cols-12 mt-6">
			<div className="col-start-2 col-span-2">
				<Category category={props.category} />
			</div>
			<div className="col-span-8">
				<Products product={product} />
			</div>
		</div>
	);
};

export default ProductPage;
