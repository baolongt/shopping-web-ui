const LayoutAddProduct = () => {
	return (
		<div className="p-3 grid grid-cols-2">
			<div>
				<div className="flex flex-col">
					<label
						for="productName"
						className="text-gray-800 font-semibold mb-2 ml-1"
					>
						Product name
					</label>
					<input
						id="productName"
						type="text"
						className="placeholder-gray-400 p-2  text-black
					rounded-md w-72 focus:outline-none border-2 focus:border-blue-400"
					/>
				</div>
				<div className="flex flex-row gap-4">
					<div className="flex flex-col">
						<label
							for="productName"
							className="text-gray-800 font-semibold mb-2 ml-1"
						>
							Brand
						</label>
						<select
							className="placeholder-gray-400 p-2  text-black
					rounded-md w-72 focus:outline-none border-2 focus:border-blue-400"
						>
							<option value="">test</option>
						</select>
					</div>
					<div className="flex flex-col">
						<label
							for="productName"
							className="text-gray-800 font-semibold mb-2 ml-1"
						>
							Category
						</label>
						<select
							className="placeholder-gray-400 p-2  text-black
					rounded-md w-72 focus:outline-none border-2 focus:border-blue-400"
						>
							<option value="">test</option>
							<option value="">test</option>
						</select>
					</div>
				</div>
				<div className="flex flex-col">
					<label
						for="productName"
						className="text-gray-800 font-semibold mb-2 ml-1"
					>
						Sub category
					</label>
					<select
						className="placeholder-gray-400 p-2  text-black
					rounded-md w-72 focus:outline-none border-2 focus:border-blue-400"
					>
						<option value="">test</option>
						<option value="">test</option>
					</select>
				</div>
				<div className="flex flex-col">
					<label
						for="productName"
						className="text-gray-800 font-semibold mb-2 ml-1"
					>
						Sub category
					</label>
					<textarea
						className="placeholder-gray-400 p-2  text-black
					rounded-md w-72 focus:outline-none border-2 focus:border-blue-400 resize-none"
					/>
				</div>
			</div>
		</div>
	);
};

export default LayoutAddProduct;
