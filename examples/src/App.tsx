import {
  Alert,
  AlertDescription,
  AlertTitle,
  Card,
  CardContent,
} from "xplorer-ui";
import { SidebarInset, SidebarProvider } from "xplorer-ui";
import { AppSidebar } from "./menu/app-sidebar";
import { Route, Routes } from "react-router-dom";
import Buttons from "./content/buttons";
import Loaders from "./content/loaders";
import Toasts from "./content/toasts";
import DataTables from "./content/data-tables";
import Modals from "./content/modals";
import EmployeeForm from "./content/forms";
import React from "react";

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Warning />
            <Card className="pt-4">
              <CardContent className="pt-2">
                <Routes>
                  <Route index element={<Buttons />} />
                  <Route path="components/buttons" element={<Buttons />} />
                  <Route path="components/taosts" element={<Toasts />} />
                  <Route path="components/loaders" element={<Loaders />} />
                  <Route path="components/modals" element={<Modals />} />
                  <Route
                    path="components/data-tables"
                    element={<DataTables />}
                  />
                  <Route path="components/forms" element={<EmployeeForm />} />
                </Routes>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

const Warning = () => {
  return (
    <div>
      <Alert variant="destructive">
        <AlertTitle>⚠️ Warning: Not Suitable for Production Use ⚠️</AlertTitle>
        <AlertDescription className="py-1 text-xs">
          This project is currently not suitable for production use. It is still
          in development and may contain bugs, incomplete features, or unstable
          APIs. While we strive to improve its functionality, we recommend using
          this project for testing, experimentation, or learning purposes only.
        </AlertDescription>
        <AlertDescription className="py-1 text-xs">
          If you are considering using this in a production environment, please
          proceed with caution and be aware of the potential risks.
        </AlertDescription>
        <AlertDescription className="py-1 text-xs">
          Feel free to contribute, open issues, and submit pull requests to help
          improve this project!
        </AlertDescription>
      </Alert>
    </div>
  );
};
