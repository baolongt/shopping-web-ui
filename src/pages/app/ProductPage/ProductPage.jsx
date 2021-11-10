import Category from "./Category";
import Products from "./Products";

const ProductPage = (props) => {
	return (
		<div className="grid grid-cols-12 mt-6">
			<div className="col-start-2 col-span-2">
				<Category />
			</div>
			<div className="col-span-8">
				<Products category={props.match.params.subCategory} />
			</div>
		</div>
	);
};

export default ProductPage;
