import { Button, ToastAction, useToast } from ".";

const App = () => {
  const { toast } = useToast();
  return (
    <div className="p-2">
        <Button
            className="mx-2"
            variant="outline"
            onClick={() => {
                toast({
                  title: "Scheduled: Catch up ",
                  description: "Friday, February 10, 2023 at 5:57 PM",
                  action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
                });
            }}
            >
            Default toast
        </Button>
        <Button
            variant="outline"
            onClick={() => {
                toast({
                  variant: 'destructive',
                  title: "Scheduled: Catch up ",
                  description: "Friday, February 10, 2023 at 5:57 PM",
                  action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
                });
            }}
            >
            Destructive toast
        </Button>
        <Button
            className="mx-2"
            variant="outline"
            onClick={() => {
                toast({
                  variant: 'invert',
                  title: "Scheduled: Catch up ",
                  description: "Friday, February 10, 2023 at 5:57 PM",
                  action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
                });
            }}
            >
            Invert toast
        </Button>
    </div>
  );
};

export default App;
