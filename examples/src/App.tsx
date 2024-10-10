import { Card, CardContent, CardHeader } from "xplorer-ui";
import Buttons from "./content/buttons";
import Loaders from "./content/loaders";
import Toasts from "./content/toasts";
import DataTables from "./content/data-tables";
import Modals from "./content/modals";

const App = () => {
  return (
    <div className="p-2 space-y-2">
      <Card>
        <CardHeader>Buttons</CardHeader>
        <CardContent className="space-y-2 py-3">
          <Buttons />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Toasts</CardHeader>
        <CardContent className="space-y-2 py-3">
          <Toasts />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Loaders</CardHeader>
        <CardContent className="space-y-2 py-3">
          <Loaders />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Data Tables</CardHeader>
        <CardContent className="space-y-2 py-3">
          <DataTables />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Modals</CardHeader>
        <CardContent className="space-y-2 py-3">
          <Modals />
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
