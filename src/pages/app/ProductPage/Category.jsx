import { Link } from "react-router-dom";

const Category = (props) => {
	return (
		<>
			{props.category.map((c, index) => {
				return (
					<div
						key={index}
						className="relative overflow-hidden p-3 cursor-pointer"
					>
						<div className="h-5 w-full flex items- pl-5">
							<p className="text-lg font-semibold">{c.name}</p>
						</div>
						<div
							id={`${c.id}_down`}
							className="absolute top-3 right-5"
							onClick={() => showSubCategory(c.id)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
						<div
							className="absolute top-3 right-5 hidden"
							onClick={() => hideSubCategory(c.id)}
							id={`${c.id}_up`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 15l7-7 7 7"
								/>
							</svg>
						</div>
						<div class="hidden flex flex-col mt-2" id={`cate_${c.id}`}>
							{c.subCategories.map((subCate, index) => {
								return (
									<Link
										to={`/category/${c.name}/${subCate.name}`}
										key={index}
										className="ml-8 p-1 mb-2"
									>
										{subCate.name}
									</Link>
								);
							})}
						</div>
					</div>
				);
			})}
		</>
	);
};

const showSubCategory = (id) => {
	console.log(`cate_${id}`);
	let cate = document.getElementById(`cate_${id}`);
	if (cate.classList.contains("hidden")) {
		cate.classList.remove("hidden");
		document.getElementById(`${id}_down`).classList.add("hidden");
		document.getElementById(`${id}_up`).classList.remove("hidden");
	}
};

const hideSubCategory = (id) => {
	console.log(`cate_${id}`);
	let cate = document.getElementById(`cate_${id}`);
	if (!cate.classList.contains("hidden")) {
		cate.classList.add("hidden");
		document.getElementById(`${id}_up`).classList.add("hidden");
		document.getElementById(`${id}_down`).classList.remove("hidden");
	}
};

export default Category;
