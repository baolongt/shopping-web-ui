import axios from "axios";
import { useEffect, useState } from "react";

const LayoutAddProduct = () => {
	const [brand, setBrand] = useState([]);
	const [category, setCategory] = useState([]);
	const [parentID, setParentID] = useState(0);
	const [subCategory, setSubCategory] = useState([]);
	const [newProduct, setNewProduct] = useState({
		name: "",
		brandID: parentID,
		detail: "",
		categoryID: ""
	});

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

	const handleInputProdcutName = (e) => {
		setNewProduct({ ...newProduct, name: e.target.value });
	};
	const handleInputDetails = (e) => {
		setNewProduct({ ...newProduct, detail: e.target.value });
	};
	const handleSelectBrandId = (e) => {
		setNewProduct({ ...newProduct, brandID: e.target.value });
	};

	const handleAddNewProduct = async () => {
		let url =
			process.env.REACT_APP_ENV.trim() === "dev"
				? process.env.REACT_APP_BACKEND_API_URL_DEV
				: "";
		let addNewProductURL = url + "/product/add";
		let subCategoryID = document.getElementById("subCategory").value;
		let response = await axios.post(addNewProductURL, {
			...newProduct,
			categoryID: subCategoryID
		});
		console.log(response.data);
	};

	return (
		<div className="p-3 grid grid-cols-12">
			<div className="col-span-5 col-start-2 flex flex-col">
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
						onChange={(e) => handleInputProdcutName(e)}
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
							onChange={(e) => handleSelectBrandId(e)}
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
						>
							<option value=""></option>
							{category.map((c) => {
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
						>
							<option value=""></option>
							{subCategory.map((subCate) => {
								return (
									<option key={subCate.id} value={subCate.id}>
										{subCate.name}
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
						className="placeholder-gray-400 p-2  text-black
					rounded-md w-96 4/12 h-40 focus:outline-none border-2 focus:border-blue-400 resize-none"
						onChange={(e) => handleInputDetails(e)}
					/>
				</div>
				<button
					onClick={() => handleAddNewProduct()}
					className="p-2 bg-blue-500 text-white px-5 rounded-lg mt-3 w-3/12 self-end"
				>
					Add
				</button>
			</div>
			{/* add  stuffs */}
			<div className="ml-9 col-start-7 col-span-4 border-l-2 border-gray-300 pl-3">
				<div>
					<p className="text-gray-400 text-xl font-semibold mb-2 ml-1">
						Add new brand
					</p>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col">
							<label
								for="productName"
								className="text-gray-800 font-semibold mb-2 ml-1"
							>
								New brand's name
							</label>
							<input
								id="productName"
								type="text"
								className="placeholder-gray-400 p-2  text-black
					rounded-md w-40 focus:outline-none border-2 focus:border-blue-400"
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<button
							className="mt-3 p-2 rounded-lg text-white 
						bg-blue-500 hover:bg-blue-600 focus:ring focus:ring-blue-300 self-center"
						>
							Add
						</button>
					</div>
				</div>
				<div className="mt-2">
					<p className="text-gray-400 text-xl font-semibold mb-2 ml-1">
						Add new Category
					</p>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col">
							<label
								for="productName"
								className="text-gray-800 font-semibold mb-2 ml-1"
							>
								Parent Category
							</label>
							<select
								className="placeholder-gray-400 p-2  text-black
					rounded-md w-40 focus:outline-none border-2 focus:border-blue-400"
								onChange={(e) => {
									setParentID(e.target.value);
								}}
							>
								<option value=""></option>
								{category.map((c) => {
									return (
										<option key={c.id} value={c.id}>
											{c.name}
										</option>
									);
								})}
							</select>
						</div>
						<div className="flex flex-col">
							<label
								for="productName"
								className="text-gray-800 font-semibold mb-2 ml-1"
							>
								New category's name
							</label>
							<input
								id="productName"
								type="text"
								className="placeholder-gray-400 p-2  text-black
					rounded-md w-40 focus:outline-none border-2 focus:border-blue-400"
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<button
							className="mx-auto mt-3 p-2 rounded-lg text-white 
						bg-blue-500 hover:bg-blue-600 focus:ring focus:ring-blue-300 self-center"
							onClick={() => handleAddNewProduct()}
						>
							Add
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LayoutAddProduct;
