import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "@/index";
import { FieldValues, UseFormReturn } from "react-hook-form";

export const FormButtons = <
  TFieldValues extends FieldValues = FieldValues,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
>({
  onCancel,
  form,
  hideCancel,
  loading,
  disabled,
}: {
  onCancel?: () => void;
  onCancelNavigateTo?: string;
  hideCancel?: boolean;
  loading?: boolean;
  disabled?: boolean;
  form: UseFormReturn<TFieldValues, TContext, TTransformedValues>;
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
          <Button type="submit" disabled={loading || disabled}>
            {loading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}{" "}
            Submit
          </Button>
          <>
            {!hideCancel && (
              <>
                {form.formState.isDirty ? (
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => form.reset()}
                  >
                    Reset
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    type="button"
                    onClick={onCancelClick}
                  >
                    Cancel
                  </Button>
                )}
              </>
            )}
          </>
        </>
      )}
    </div>
  );
};
