import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@bit-xplorer/xplorer-ui/dist/style.css";
import { ThemeProvider } from "@bit-xplorer/xplorer-ui";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
