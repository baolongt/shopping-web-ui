import { Link } from "react-router-dom";

const Products = (props) => {
	return (
		<div>
			<div class="grid grid-cols-12">
				{props.product
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
