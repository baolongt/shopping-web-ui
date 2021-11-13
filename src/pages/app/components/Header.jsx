import { Link } from "react-router-dom";
const Header = (props) => {
	return (
		<>
			<header className="grid grid-cols-12 p-3 pb-0 border-b-2 z-50">
				<div className="col-span-1 col-start-2">My-Wear</div>
				<div className="col-span-2 col-start-4 flex flex-row font-medium text-gray-600 cursor-pointer">
					<div className="mx-2">Newest</div>
					<div
						className="mx-2"
						onMouseOver={() => showExplore()}
						onMouseLeave={() => hideExplore()}
					>
						Explore
					</div>
				</div>
				<div className="col-span-2 col-start-7 text-gray-500 focus-within:text-gray-700 col-start-0">
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
						className="py-2 pl-8 font-semibold placeholder-gray-500 text-black
					rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-400
					focus:ring focus:outline-none"
						id="username"
						type="text"
						autoComplete="off"
						aria-label="Search product name"
						placeholder="Search product name"
					/>
				</div>
			</header>
			<div
				onMouseOver={() => showExplore()}
				onMouseLeave={() => hideExplore()}
				id="Explore"
				className="z-50 absolute w-full p-2 hidden bg-gray-200 flex flex-row justify-center"
			>
				{props.category.map((c) => {
					return (
						<div key={c.id} className="mx-6">
							<p className="text-lg font-semibold text-gray-500">{c.name}</p>
							<div className="pl-1 text-gray-700 flex flex-col">
								{c.subCategories.map((subCate) => {
									return (
										<Link
											key={subCate.id}
											to={`/category/${c.name}/${subCate.name}`}
										>
											{subCate.name}
										</Link>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

const showExplore = () => {
	let explore = document.getElementById("Explore");
	explore.classList.remove("hidden");
};

const hideExplore = () => {
	let explore = document.getElementById("Explore");
	explore.classList.add("hidden");
};

export default Header;
