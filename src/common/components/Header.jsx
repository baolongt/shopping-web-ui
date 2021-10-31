const Header = () => {
	return (
		<header className="grid grid-cols-12 p-3 border-b-2">
			<div className="col-span-2">logo</div>
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
					class="py-2 pl-8 font-semibold placeholder-gray-500 text-black
					rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-400
					focus:ring w-96 focus:outline-none"
					id="username"
					type="text"
					autoComplete="off"
					aria-label="Search product name"
					placeholder="Search product name"
				/>
			</div>
			<div className="p-1 col-end-9 flex font-medium text-gray-600">
				<div className="flex-1 cursor-pointer">Newest</div>
				<div className="ml-5 flex-1 cursor-pointer">Category</div>
			</div>
		</header>
	);
};

export default Header;
