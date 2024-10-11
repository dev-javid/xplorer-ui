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

interface Props extends FormInputProps {
  placeholder: string;
  defaultValue?: string | undefined;
  options: { label: string; value: string }[];
}

export function SimpleSelect({
  control,
  name,
  label,
  options,
  disabled,
  description = "",
  defaultValue,
}: Props) {
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
}
