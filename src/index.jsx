import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import GlobalFonts from "./assets/fonts/fonts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalFonts />
    <App />
  </React.StrictMode>
);
