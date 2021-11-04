import { Route } from "react-router";
import Account from "./components/Account";
import Dashboard from "./components/Dashboard";
import Order from "./components/Order";
import Product from "./components/Product";
import SideBar from "./components/SideBar";

const Admin = () => {
	return (
		<div className="grid grid-cols-12 h-screen bg-gray-50">
			<div className="col-start-1 col-span-2 pl-3">
				<SideBar />
			</div>
			<div className="col-span-8 bg-white">
				<Route exact path="/admin" component={Dashboard} />
				<Route exact path="/admin/product" component={Product} />
				<Route exact path="/admin/order" component={Order} />
				<Route exact path="/admin/account" component={Account} />
			</div>
		</div>
	);
};

export default Admin;
