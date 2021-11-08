const Header = () => {
	return (
		<header className="grid grid-cols-12 p-3 border-b-2">
			<div className="col-span-2">My-Wear</div>
			<div className="col-span-2 text-gray-500 focus-within:text-gray-700 col-start-0">
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
					class="py-2 pl-8 font-semibold placeholder-gray-500 text-black
					rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-400
					focus:ring focus:outline-none"
					id="username"
					type="text"
					autoComplete="off"
					aria-label="Search product name"
					placeholder="Search product name"
				/>
			</div>
			<div className="p-1 col-start-7 flex flex-row font-medium text-gray-600 cursor-pointer">
				<div className="">Newest</div>
				<div
					className="ml-5"
					onMouseOver={() => showExplore()}
					onMouseLeave={() => hideExplore()}
				>
					Explore
					<div id="Explore" className="absolute mt-6 hidden p-2">
						<div className="test">test</div>
					</div>
				</div>
			</div>
		</header>
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
