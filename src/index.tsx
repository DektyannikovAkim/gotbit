import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductStoreProvider } from "./store/products";

ReactDOM.render(
  <React.StrictMode>
    <ProductStoreProvider>
      <App />
    </ProductStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
