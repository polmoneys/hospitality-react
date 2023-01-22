import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./stories/styles/spot.css";
// import "./stories/styles/camera.css";
import "./stories/styles/utils.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
