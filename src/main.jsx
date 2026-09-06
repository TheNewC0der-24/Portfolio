import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./styles/globals.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);