import { useParams } from "react-router";
import Category from "./Category";
import Products from "./Products";

const ProductPage = (props) => {
	let { category, subCategory } = useParams();
	return (
		<div className="grid grid-cols-12 mt-6">
			<div className="col-start-2 col-span-2">
				<Category category={props.category} />
			</div>
			<div className="col-span-8">
				<Products category={subCategory} />
			</div>
		</div>
	);
};

export default ProductPage;
