import { Spinner } from "xplorer-ui";

const Loaders = () => {
  return (
    <div className="flex gap-4">
      <Spinner />
      <Spinner className="text-primary" />
      <Spinner className="text-secondary" />
      <Spinner className="text-destructive" />
      <Spinner className="text-green-500" />
    </div>
  );
};

export default Loaders;
