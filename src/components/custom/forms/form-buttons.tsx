import { useNavigate } from "react-router-dom";
import { Button } from "@/index";

export const FormButtons = ({
  onCancel,
  form,
}: {
  onCancel?: () => void;
  onCancelNavigateTo?: string;
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
              variant="outline"
              type="button"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
          ) : (
            <Button variant="outline" type="button" onClick={onCancelClick}>
              Cancel
            </Button>
          )}
        </>
      )}
    </div>
  );
};
