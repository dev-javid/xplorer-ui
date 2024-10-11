import {
  cn,
  FormControl,
  FormDescription,
  FormField,
  FormInputProps,
  FormItem,
  FormLabel,
  Switch,
} from "@/index";

export const SwitchInput = ({
  name,
  label,
  description = "",
  control,
  disabled,
  className,
}: FormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn(
            "flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",
            className
          )}
        >
          <div className="space-y-0.5">
            <FormLabel>{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
          </div>
          <FormControl>
            <Switch
              disabled={disabled}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
