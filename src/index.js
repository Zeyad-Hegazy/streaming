import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import App from "./App";

const DOM_NODE = document.getElementById("root");
const root = createRoot(DOM_NODE);

root.render(<App />);
