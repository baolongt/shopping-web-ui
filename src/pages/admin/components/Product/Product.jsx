import { Link, Route, useLocation } from "react-router-dom";
import LayoutAddProduct from "./Add/LayoutAddProduct";
import OverviewProduct from "./Overview/OverviewProduct";

const Product = () => {
	const location = useLocation();
	const path = location.pathname;
	return (
		<>
			<p className="text-xl text-gray-800 font-semibold p-2 ml-5">Products</p>
			<div className="bg-white mx-5 rounded-2xl px-5">
				<div className="mb-2 flex cursor-pointer text-gray-500 font-semibold">
					<Link
						className={`p-2 pb-1 ${
							path == "/admin/product"
								? "border-b-2 border-blue-500 text-blue-500"
								: ""
						}`}
						to="/admin/product"
					>
						Overview
					</Link>
					<Link
						className={`p-2 pb-1 ${
							path == "/admin/product/add"
								? "border-b-2 border-blue-500 text-blue-500"
								: ""
						} `}
						to="/admin/product/add"
					>
						Add product
					</Link>
				</div>
				<div className="">
					<Route exact path="/admin/product" component={OverviewProduct} />
					<Route exact path="/admin/product/add" component={LayoutAddProduct} />
				</div>
			</div>
		</>
	);
};

export default Product;
