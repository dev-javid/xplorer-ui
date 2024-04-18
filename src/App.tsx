import { Button, ToastAction, useToast } from ".";

const App = () => {
  const { toast } = useToast();
  return (
    <div className="p-2">
        <Button
            variant="outline"
            onClick={() => {
                toast({
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
                });
            }}
            >
            Show toast
        </Button>
    </div>
  );
};

export default App;
