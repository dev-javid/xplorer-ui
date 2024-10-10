import React from "react";
import ReactDOM from "react-dom/client";
import "xplorer-ui/dist/style.css";
import {
  SimpleModalContextProvider,
  SimpleConfirmProvider,
  ThemeProvider,
  Toaster,
  TooltipProvider,
} from "xplorer-ui";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="bit-hrms-theme">
      <TooltipProvider>
        <SimpleModalContextProvider>
          <SimpleConfirmProvider>
            <App />
          </SimpleConfirmProvider>
        </SimpleModalContextProvider>
      </TooltipProvider>
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
);
