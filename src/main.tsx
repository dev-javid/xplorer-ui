import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./contexts/theme-provider-context";
import "./index.css";
import {
  AlertModalContextProvider,
  ConfirmModalProvider,
  Toaster,
  TooltipProvider,
} from ".";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="bit-hrms-theme">
      <TooltipProvider>
        <AlertModalContextProvider>
          <ConfirmModalProvider>
            <App />
          </ConfirmModalProvider>
        </AlertModalContextProvider>
      </TooltipProvider>
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
);
