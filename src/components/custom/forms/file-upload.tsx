import {
  FormControl,
  FormField,
  FormInputProps,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/index";

interface Props extends FormInputProps {
  placeholder: string;
}

async function fileToBase64(file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    // Define onload callback function
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result); // Resolve with base64 string
      } else {
        reject(new Error("Failed to read file as base64 string"));
      }
    };

    // Define onerror callback function
    reader.onerror = () => {
      reject(reader.error); // Reject with error
    };

    // Read the file as Data URL (base64)
    reader.readAsDataURL(file);
  });
}

export const FileUploadInput = ({
  control,
  name,
  label,
  placeholder,
  disabled,
  className,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render={({ field: { value, onChange, ...fieldProps } }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...fieldProps}
              placeholder={placeholder}
              type="file"
              accept="image/*, application/pdf"
              onChange={async (event) =>
                onChange(
                  event.target.files &&
                    (await fileToBase64(event.target.files[0]))
                )
              }
              disabled={disabled}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
