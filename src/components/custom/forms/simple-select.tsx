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
} from "@/index";

export function SimpleSelect({
  control,
  name,
  label,
  options,
  disabled,
  defaultValue,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  label: string;
  disabled?: boolean;
  defaultValue: string;
  options: { label: string; value: string }[];
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={defaultValue ?? field.value}
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
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
