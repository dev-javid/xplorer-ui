import { HomeIcon } from "lucide-react";
import { Button, Spinner } from "..";

const ButtonsExample = () => {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button>
        <HomeIcon className="mr-2 h-4 w-4" />
        With Icon
      </Button>
      <Button disabled>
        <Spinner className="mr-2 h-4 w-4 animate-spin" />
        With Icon
      </Button>
    </div>
  );
};

export default ButtonsExample;
