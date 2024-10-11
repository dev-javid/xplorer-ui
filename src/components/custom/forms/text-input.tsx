import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/index";

export interface FormInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  label: string;
  description?: string | undefined;
  disabled?: boolean;
  className?: string | undefined;
}

interface Props extends FormInputProps {
  placeholder: string;
  type?: string | undefined;
}

export const TextInput = ({
  control,
  name,
  label,
  placeholder,
  description = "",
  disabled,
  type,
  className,
}: Props) => {
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
