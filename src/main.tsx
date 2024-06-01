import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

const rootElement: any = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);