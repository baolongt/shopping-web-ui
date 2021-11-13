import { useState, useEffect } from "react";

const ProductDetail = (props) => {
	const [details, setDetails] = useState([]);
	const [currentDetail, setCurerntDetail] = useState(null);
	useEffect(() => {
		setDetails([...props.product.productDetails]);
		if (props.product.productDetails.length > 0) {
			setCurerntDetail(props.product.productDetails[0].id);
		}
	}, []);

	const getProductById = (id) => {
		return details.filter((d) => d.id == id)[0];
	};

	return currentDetail == null ? (
		<></>
	) : (
		<>
			<div>
				<select
					className="text-black  p-2
					rounded-md w-60 focus:outline-none border-2 focus:border-blue-400"
					value={currentDetail}
					onChange={(e) => setCurerntDetail(e.target.value)}
				>
					{details.map((detail) => {
						return (
							<option value={detail.id}>
								{detail.id}. {detail.color.name} - {detail.size}` -{" "}
								{detail.price} ({detail.quantity}){" "}
							</option>
						);
					})}
				</select>
			</div>
			<div className="mt-5 flex flex-row">
				<div className="mr-6">
					<p className="text-gray-800 font-semibold mb-2 ml-1">Price</p>
					<input
						type="text"
						className="placeholder-gray-400 p-2  text-black
					rounded-md w-40 focus:outline-none border-2 focus:border-blue-400"
						value={getProductById(currentDetail).price}
					/>
				</div>
				<div className="mr-6">
					<p className="text-gray-800 font-semibold mb-2 ml-1">Quantity</p>
					<input
						type="text"
						className="placeholder-gray-400 p-2  text-black
					rounded-md w-40 focus:outline-none border-2 focus:border-blue-400"
						value={getProductById(currentDetail).quantity}
					/>
				</div>
			</div>
			<div></div>
		</>
	);
};

export default ProductDetail;
