import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import App from "./App";
import store from "./redux/Store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

store.subscribe(() => console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store = {store}>
    <App />
    </Provider>
  </BrowserRouter>
);


reportWebVitals();
