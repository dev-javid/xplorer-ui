import useFormMethods from "./use-form-methods";
import {
  Form,
  FormButtons,
  TextInput,
  SwitchInput,
  SimpleSelect,
  DatePicker,
} from "xplorer-ui";
import { startOfYear, addMonths, endOfYear } from "date-fns";

const EmployeeForm = () => {
  const { form, onSubmit } = useFormMethods();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <TextInput
          name="name"
          label="Name"
          placeholder="Employee Name"
          control={form.control}
          description="Enter employee name  description"
        />
        <DatePicker
          placeholder="Date of Joining"
          label="Date of Joining"
          name="dateOfJoining"
          control={form.control}
          minDate={addMonths(new Date(), -40)}
          maxDate={addMonths(new Date(), -20)}
          description="Enter date of joining  description"
        />
        {/* <DatePicker
          placeHolder="Date of Joining"
          label="Date of Joining"
          name="dateOfJoining"
          control={form.control}
          range={(date) => {
            return (
              date >= startOfYear(new Date()) &&
              date <= addMonths(endOfYear(new Date()), 2)
            );
          }}
          description="Enter date of joining  description"
          className="pt-4"
        /> */}

        <SwitchInput
          control={form.control}
          name="active"
          label="Active"
          description="Employee active  description"
          className="mt-4"
        />

        <SimpleSelect
          control={form.control}
          label="Gender"
          name="gender"
          options={["Male", "Female", "Other"].map((x) => ({
            label: x,
            value: x,
          }))}
          defaultValue=""
          description="Select gender description"
          placeholder="Select gender"
          className="mt-4"
        />

        <FormButtons form={form} loading={form.formState.isSubmitting} />
      </form>
    </Form>
  );
};

export default EmployeeForm;
