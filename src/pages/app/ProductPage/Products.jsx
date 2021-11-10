import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
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
					category: props.category
				}
			});
			const data = await response.data.data.content;
			setProduct(data);
		};
		getProduct();
	}, []);
	return (
		<div>
			<div class="grid grid-cols-12">
				{product
					.filter((p) => p.productDetails.length != 0)
					.map((p, index) => {
						return (
							<>
								<Link
									to={`/product/${p.id}`}
									key={index}
									className="col-span-3 mr-5"
								>
									<div className="">
										<img
											className="w-full"
											src={p.productDetails[0].imgURL}
											alt={p.name}
										/>
									</div>
									<div className="">
										<p className="font-semibold text-lg text-right">{p.name}</p>
										<p className="font-semibold text-xl text-right">
											{`${p.productDetails[0].price} ${process.env.REACT_APP_CURRENTCY}`}
										</p>
									</div>
								</Link>
							</>
						);
					})}
			</div>
		</div>
	);
};

export default Products;
