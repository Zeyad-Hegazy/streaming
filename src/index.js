import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { video } from "./reducers/videoReducer";
import App from "./App";

import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DOM_NODE = document.getElementById("root");
const root = createRoot(DOM_NODE);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
