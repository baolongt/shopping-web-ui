import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/app/App";
import "./css/main.css";
import { Route, Switch } from "react-router";
import Admin from "./pages/admin/Admin";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path="/admin" component={Admin} />
				<Route path="/" component={App} />
				<App />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
