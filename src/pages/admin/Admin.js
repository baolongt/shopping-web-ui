import { Route } from "react-router";
import Account from "./components/Account/Account";
import Dashboard from "./components/Dashboard/Dashboard";
import Order from "./components/Order/Order";
import Product from "./components/Product/Product";
import SideBar from "./components/SideBar/SideBar";

const Admin = () => {
	return (
		<div className="grid grid-cols-12 h-screen bg-gray-300 bg-opacity-60">
			<div className="col-span-2 bg-white">
				<SideBar />
			</div>
			<div className="col-span-10">
				<Route path="/admin/dashboard" component={Dashboard} />
				<Route path="/admin/product" component={Product} />
				<Route path="/admin/order" component={Order} />
				<Route path="/admin/account" component={Account} />
			</div>
		</div>
	);
};

export default Admin;
