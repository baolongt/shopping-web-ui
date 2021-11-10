import axios from "axios";
import { useEffect, useState } from "react";
import Breadcurmb from "../components/Breadcrumb";

const ProductDetail = (props) => {
	const [product, setProduct] = useState(null);
	const [detail, setDetail] = useState(null);
	useEffect(() => {
		const getDetail = async () => {
			let url =
				process.env.REACT_APP_ENV.trim() === "dev"
					? process.env.REACT_APP_BACKEND_API_URL_DEV
					: "";
			let getProductDetailURL = url + "/product/getById";
			const response = await axios.get(getProductDetailURL, {
				params: {
					id: props.match.params.id
				}
			});
			const data = await response.data.data;
			console.log(data.productDetails[0]);
			setProduct(data);
			setDetail(data.productDetails[0]);
		};
		getDetail();
	}, []);

	return detail == null ? (
		<></>
	) : (
		<>
			<div className="mx-36 mt-10">
				<div className="grid grid-cols-12 mb-5">
					<div className="col-span-4 col-start-4">
						<Breadcurmb
							pCategory={product.category.pcategoryName}
							subCategory={product.category.categoryName}
							productId={product.id}
							product={product.name}
						/>
					</div>
				</div>
				<div className="grid grid-cols-12">
					<div className="col-span-4 col-start-4">
						<div className="w-80">
							<img className="w-full" src={detail.imgURL} alt={detail.id} />
						</div>
					</div>
					<div className="col-span-4 flex flex-col">
						<div>
							<p className="text-5xl font-semibold">{product.name}</p>
							<p className="text-2xl font-semibold">{`${detail.price} ${process.env.REACT_APP_CURRENTCY}`}</p>
						</div>
						<div className="mt-4 flex flex-col">
							<label className="text-xl font-medium">Size </label>
							<select
								id="size"
								className="text-black p-2 rounded-md w-40 focus:outline-none border-2 focus:border-blue-400"
							>
								{product.sizes.map((s, index) => {
									return (
										<option key={index} value={s}>
											{s}
										</option>
									);
								})}
							</select>
							<label className="text-xl font-medium">Color </label>
							<select
								id="color"
								className="p-2 text-black rounded-md w-40 focus:outline-none border-2 focus:border-blue-400"
							>
								{product.colors.map((c, index) => {
									return (
										<option key={index} value={c}>
											{c}
										</option>
									);
								})}
							</select>
						</div>
						<div className="mt-8 ml-10">
							<button className="p-3 bg-blue-500 text-white rounded-md">
								Add to cart
							</button>
						</div>
					</div>
					<div className="col-span-4 col-start-4">
						<div className="">
							<p className="text-2xl font-medium mt-3">Details</p>
							<p className="text-2xl">{product.detail}</p>
						</div>
					</div>
					<div className="col-span-4 col-start-4">
						<div className="">
							<p className="text-2xl font-medium mt-3">Rating</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetail;
