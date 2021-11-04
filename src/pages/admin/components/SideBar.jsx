import { Link } from "react-router-dom";

const SideBar = () => {
	return (
		<>
			<ul className="text-gray-400 pt-32">
				<li className="mb-5 ml-20 hover:text-gray-800">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 absolute"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
						/>
					</svg>
					<Link className="ml-8" to="/admin">
						Dashboard
					</Link>
				</li>
				<li className="mb-5 ml-20 hover:text-gray-800">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 absolute"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
						/>
					</svg>
					<Link className="ml-8" to="/admin/product">
						Product
					</Link>
				</li>
				<li className="mb-5 ml-20 hover:text-gray-800">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 absolute"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
						/>
					</svg>
					<Link className="ml-8" to="/admin/order">
						Order
					</Link>
				</li>
				<li className="mb-5 ml-20 hover:text-gray-800">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 absolute"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
					<Link className="ml-8" to="/admin/account">
						Accounts
					</Link>
				</li>
			</ul>
		</>
	);
};

export default SideBar;
