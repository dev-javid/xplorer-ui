import { Spinner } from "@/components/custom/loaders/spinner";

const LoadersExample = () => {
  return (
    <div className="flex gap-4">
      <Spinner />
      <Spinner className="text-primary" />
      <Spinner className="text-secondary" />
    </div>
  );
};

export default LoadersExample;
