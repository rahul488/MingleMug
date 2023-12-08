import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <App />
    <ToastContainer />
  </ErrorBoundary>
);
