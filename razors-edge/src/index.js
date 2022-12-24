import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
