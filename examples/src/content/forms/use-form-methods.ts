import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormSchema, { FormSchemaType } from "./schema";
import { toast } from "xplorer-ui";

const useFormMethods = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      employeeId: 0,
      name: "",
      dateOfJoining: "" as unknown as Date,
      active: true,
      gender: "",
    },
  });

  async function onSubmit(data: FormSchemaType) {
    toast({
      variant: "primary",
      title: "Data ",
      description: JSON.stringify(data),
    });
  }

  return {
    form,
    onSubmit,
  };
};

export default useFormMethods;
