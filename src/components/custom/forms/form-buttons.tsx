import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "@/index";

export const FormButtons = ({
  onCancel,
  form,
  hideCancel,
  loading,
}: {
  onCancel?: () => void;
  onCancelNavigateTo?: string;
  hideCancel?: boolean;
  loading?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
}) => {
  const navigate = useNavigate();

  const onCancelClick = () => {
    form.reset();
    if (onCancel) {
      onCancel();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="flex gap-2">
      {form && (
        <>
          <Button type="submit">Submit</Button>
          {form.formState.isDirty ? (
            <Button
              disabled={loading}
              variant="outline"
              type="button"
              onClick={() => form.reset()}
            >
              {loading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
              Reset
            </Button>
          ) : (
            !hideCancel && (
              <Button variant="outline" type="button" onClick={onCancelClick}>
                Cancel
              </Button>
            )
          )}
        </>
      )}
    </div>
  );
};
