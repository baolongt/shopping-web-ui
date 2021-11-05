import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import axios from "axios";

const SearchBar = (props) => {
	const [searchValue, serSearchValue] = useState("");
	const [value] = useDebounce(searchValue, 700);
	useEffect(() => {
		async function search() {
			let url =
				process.env.REACT_APP_ENV.trim() === "dev"
					? process.env.REACT_APP_BACKEND_API_URL_DEV
					: "";
			const response = await axios.get(url + "/product/findByName", {
				params: {
					name: value,
					offset: props.pagination.offset,
					page: props.pagination.currentPage
				}
			});
			const data = response.data;
			props.setProductsCallback(data);
		}
		search();
	}, [value, props.offset, props.currentPage]);
	return (
		<div className="text-gray-500 focus-within:text-gray-700 col-span-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5 absolute ml-3 mt-3 pointer-events-none"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
					clipRule="evenodd"
				/>
			</svg>
			<input
				class="py-2 pl-8 placeholder-gray-400  text-black
					rounded-2xl border-none w-72 focus:outline-none bg-gray-300 bg-opacity-60"
				id="searchValue"
				type="text"
				autoComplete="off"
				placeholder={`${props.placeHolder}`}
				onChange={(e) => serSearchValue(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
