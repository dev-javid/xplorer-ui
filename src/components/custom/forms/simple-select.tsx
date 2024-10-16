import {
  FormField,
  FormItem,
  FormLabel,
  Select,
  FormControl,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  FormMessage,
  FormDescription,
  FormInputProps,
} from "@/index";
import { FieldValues } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props<TFieldValues extends FieldValues = FieldValues, TContext = any>
  extends FormInputProps<TFieldValues, TContext> {
  placeholder: string;
  defaultValue?: string | undefined;
  options: { label: string; value: string }[];
}

const SimpleSelect = <
  TFieldValues extends FieldValues = FieldValues,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TContext = any
>({
  control,
  name,
  label,
  options,
  disabled,
  description = "",
  defaultValue,
}: Props<TFieldValues, TContext>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={defaultValue ?? field.value ?? ""}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={"Select"} className="text-sm" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((x) => (
                <SelectItem key={x.value} value={x.value}>
                  {x.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { SimpleSelect };
