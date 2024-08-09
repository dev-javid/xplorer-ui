import { Card, CardContent, CardHeader } from ".";
import ButtonsExample from "./examples/buttons-example";
import LoadersExample from "./examples/loaders-example";
import ToastsExample from "./examples/toasts-example";

const App = () => {
  return (
    <div className="p-2 space-y-2">
      <Card>
        <CardHeader>Toasts</CardHeader>
        <CardContent className="space-y-2 py-3">
          <ToastsExample />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Toasts</CardHeader>
        <CardContent className="space-y-2 py-3">
          <ButtonsExample />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Loaders</CardHeader>
        <CardContent className="space-y-2 py-3">
          <LoadersExample />
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
