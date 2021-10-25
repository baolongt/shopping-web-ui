const Header = () => {
	return (
		<header className="grid grid-cols-12 p-3">
			<div className="col-span-2">logo</div>
			<div className="col-span-4">
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="username"
					type="text"
					placeholder="Search product name"
				/>
			</div>
			<div className="p-1 col-end-10 flex font-medium text-gray-600">
				<div className="flex-1 cursor-pointer">Newest</div>
				<div className="ml-5 flex-1 cursor-pointer">Category</div>
			</div>
		</header>
	);
};

export default Header;
