import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { VideoContextProvider } from "./context/VideoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <VideoContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </VideoContextProvider>
);
