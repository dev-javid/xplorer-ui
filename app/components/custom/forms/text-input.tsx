import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/index";
import { Control, FieldValues, Path } from "react-hook-form";

export interface FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TContext = any
> {
  control: Control<TFieldValues, TContext>;
  name: Path<TFieldValues>;
  label: string;
  description?: string | undefined;
  disabled?: boolean;
  className?: string | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props<TFieldValues extends FieldValues = FieldValues, TContext = any>
  extends FormInputProps<TFieldValues, TContext> {
  placeholder: string;
  type?: string | undefined;
}

const TextInput = <
  TFieldValues extends FieldValues = FieldValues,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TContext = any
>({
  control,
  name,
  label,
  placeholder,
  description = "",
  disabled,
  type,
  className,
}: Props<TFieldValues, TContext>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              className="w-full"
              placeholder={placeholder}
              disabled={disabled}
              type={type ?? "text"}
              {...field}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { TextInput };
