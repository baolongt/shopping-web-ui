/* eslint-disable eqeqeq */
import axios from "axios";
import _, { bindAll } from "lodash";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const EditProduct = () => {
	const location = useLocation();
	const [product, setProduct] = useState({
		name: "",
		brand: {},
		detail: "",
		id: "",
		productDetails: [],
		categories: []
	});
	const [brand, setBrand] = useState([]);
	const [category, setCategory] = useState([]);
	const [parentID, setParentID] = useState(0);
	const [subCategory, setSubCategory] = useState([]);
	let productID = location.pathname.split("/")[4];
	useEffect(() => {
		const callApi = async () => {
			let url =
				process.env.REACT_APP_ENV.trim() === "dev"
					? process.env.REACT_APP_BACKEND_API_URL_DEV
					: "";
			let parentCategoryURL = url + "/category/getParent";
			let brandCategoryURL = url + "/brand/getAll";
			const getCategory = axios.get(parentCategoryURL);
			const getBrand = axios.get(brandCategoryURL);
			let [brand, category] = await Promise.all([getBrand, getCategory]);
			setBrand(brand.data.data);
			setCategory(category.data.data);
		};
		callApi();
	}, []);
	useEffect(() => {
		const getProduct = async (id) => {
			let url =
				process.env.REACT_APP_ENV.trim() === "dev"
					? process.env.REACT_APP_BACKEND_API_URL_DEV
					: "";
			let getProductURL = url + "/product/getById";
			let response = await axios.get(getProductURL, {
				params: {
					id: id
				}
			});
			let data = await response.data;
			let brandID = data.data.categories.filter(
				(c) => c.parentID != null && c.parentID != 1
			)[0].parentID;
			setProduct(data.data);
			setParentID(brandID);
			console.log(data.data);
			return data;
		};
		getProduct(productID);
	}, []);

	useEffect(() => {
		const getSubCategory = async () => {
			let url =
				process.env.REACT_APP_ENV.trim() === "dev"
					? process.env.REACT_APP_BACKEND_API_URL_DEV
					: "";
			let subCategoryURL = url + "/category/getSubCategory";
			const subCategory = await axios.get(subCategoryURL, {
				params: {
					parentId: parentID
				}
			});
			setSubCategory(subCategory.data.data);
		};
		if (parentID == "") {
			setSubCategory([]);
		} else {
			getSubCategory();
		}
	}, [parentID]);
	product.categories.filter((c) => c.id != null && c.parentID != 1);
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-5 col-start-1 flex flex-col">
				<div className="flex flex-col">
					<label
						for="productName"
						className="text-gray-800 font-semibold mb-2 ml-1"
					>
						Product name
					</label>
					<input
						id="productName"
						type="text"
						className="placeholder-gray-400 p-2  text-black
					rounded-md w-72 focus:outline-none border-2 focus:border-blue-400"
						value={product.name}
					/>
				</div>
				<div className="flex flex-row gap-4">
					<div className="flex flex-col">
						<label
							for="productName"
							className="text-gray-800 font-semibold mb-2 ml-1"
						>
							Brand
						</label>
						<select
							className="placeholder-gray-400 p-2  text-black
					rounded-md w-40  focus:outline-none border-2 focus:border-blue-400"
							value={product.brand.id}
						>
							<option value=""></option>
							{brand.map((b) => {
								return (
									<option key={b.id} value={b.id}>
										{b.name}
									</option>
								);
							})}
						</select>
					</div>
				</div>
				<div className="flex flex-row gap-4">
					{/*  category  */}
					<div className="flex flex-col">
						<label
							for="productName"
							className="text-gray-800 font-semibold mb-2 ml-1"
						>
							Category
						</label>
						<select
							id="category"
							className="placeholder-gray-400 p-2  text-black
					rounded-md w-40 focus:outline-none border-2 focus:border-blue-400"
							onChange={(e) => {
								setParentID(e.target.value);
							}}
							value={parentID}
						>
							<option value=""></option>
							{category
								.filter((c) => c.id != 1)
								.map((c) => {
									return (
										<option key={c.id} value={c.id}>
											{c.name}
										</option>
									);
								})}
						</select>
					</div>
					{/* subCategory */}
					<div className="flex flex-col">
						<label
							for="productName"
							className="text-gray-800 font-semibold mb-2 ml-1"
						>
							Sub category
						</label>
						<select
							id="subCategory"
							className="placeholder-gray-400 p-2  text-black
					rounded-md w-40 focus:outline-none border-2 focus:border-blue-400"
							value={product.categories
								.filter((c) => c.parentID != null && c.parentID != 1)
								.map((c) => {
									return c != null ? c.id : "";
								})}
						>
							<option value=""></option>
							{subCategory.map((c) => {
								return (
									<option key={c.id} value={c.id}>
										{c.name}
									</option>
								);
							})}
						</select>
					</div>
				</div>
				<div className="flex flex-col">
					<label
						for="productName"
						className="text-gray-800 font-semibold mb-2 ml-1"
					>
						Product details
					</label>
					<textarea
						value={product.detail}
						className="placeholder-gray-400 p-2  text-black
					rounded-md w-96 4/12 h-40 focus:outline-none border-2 focus:border-blue-400 resize-none"
					/>
				</div>
			</div>
			<div className="col-span-3 col-start-6 flex flex-col">
				<p className="text-gray-400 text-xl font-semibold mb-2 ml-1">
					Product Details
				</p>
			</div>
			<div className="col-span-12 flex flex-row  justify-center">
				<button className="p-2 bg-blue-500 text-white px-5 rounded-lg mt-3 w-1/12">
					Save
				</button>
			</div>
		</div>
	);
};

export default EditProduct;
