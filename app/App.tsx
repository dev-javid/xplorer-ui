import { Card, CardContent, CardHeader } from ".";

const App = () => {
  return (
    <div className="p-2 space-y-2">
      <Card>
        <CardHeader>Toasts</CardHeader>
        <CardContent className="space-y-2 py-3">
          Go to example folder and run the app
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
