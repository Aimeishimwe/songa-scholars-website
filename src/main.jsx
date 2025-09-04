import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // use HashRouter for GitHub Pages
import App from "./App";

// Global CSS
import "./css/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
