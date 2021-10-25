import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import Header from "./common/components/Header";
import "./css/main.css";

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
