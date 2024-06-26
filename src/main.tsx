import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./styles/styles.css";
import '@fontsource-variable/open-sans';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
