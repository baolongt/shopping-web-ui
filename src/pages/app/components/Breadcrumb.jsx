import { Link } from "react-router-dom";

const Breadcurmb = (props) => {
	return (
		<ul class="flex text-gray-500 text-sm lg:text-base">
			<li class="inline-flex items-center">
				<Link className="underline" to="/">
					Home
				</Link>
				<svg
					class="h-5 w-auto text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					></path>
				</svg>
			</li>
			<li class="inline-flex items-center">
				<p>{props.pCategory}</p>
				<svg
					class="h-5 w-auto text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					></path>
				</svg>
			</li>
			<li class="inline-flex items-center">
				<Link
					className="underline"
					to={`/category/${props.pCategory}/${props.subCategory}`}
				>
					{props.subCategory}
				</Link>
				<svg
					class="h-5 w-auto text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					></path>
				</svg>
			</li>
			<li class="inline-flex items-center">
				<Link className="underline" to={`/product/${props.productId}`}>
					{props.product}
				</Link>
			</li>
		</ul>
	);
};

export default Breadcurmb;
