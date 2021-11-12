import _ from "lodash";
import { Link } from "react-router-dom";

const ProductTable = (props) => {
	return (
		<table className="w-full text-sm cursor-default">
			<thead className="border-b-2 text-gray-700">
				<tr>
					<th>Image</th>
					<th>Name</th>
					<th>Brand</th>
					<th>Category</th>
					<th>Quantity</th>
					<th>Number color</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{props.products.map((product, index) => {
					return (
						<tr
							key={index}
							className="text-center text-gray-700 font-medium
                         hover:bg-gray-200 hover:bg-opacity-50 hover:text-blue-600"
						>
							<td className="w-16">
								<img
									className="ml-3"
									src={
										product.productDetails.length > 0
											? product.productDetails[0].imgURL
											: process.env.REACT_APP_NO_IMG
									}
									alt={product.id}
								/>
							</td>
							<td>{product.name}</td>
							<td>{product.brandName}</td>
							<td>{product.category.categoryName}</td>
							<td>
								{product.productDetails.length > 0
									? _.sumBy(product.productDetails, (detail) => {
											return detail.quantity;
									  })
									: 0}
							</td>
							<td>{product.productDetails.length}</td>
							<td className="cursor-pointer">
								<Link to={`/admin/product/edit/${product.id}`}>Edit</Link>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default ProductTable;
