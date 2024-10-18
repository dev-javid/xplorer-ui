import { z } from "zod";

const FormSchema = z.object({
  employeeId: z.number(),
  name: z.string().min(1, "Name is required").max(50),
  dateOfJoining: z.date({
    invalid_type_error: "Date is required",
  }),
  range: z.object({
    from: z.date({
      invalid_type_error: "Please select date range",
      required_error: "Please select date range",
    }),
    to: z.date({
      invalid_type_error: "Please select date range",
      required_error: "Please select date range",
    }),
  }),
  active: z.boolean().optional(),
  gender: z.string().min(1, "Gender is required"),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
export default FormSchema;
