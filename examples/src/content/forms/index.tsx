import useFormMethods from "./use-form-methods";
import {
  Form,
  FormButtons,
  TextInput,
  SwitchInput,
  SimpleSelect,
  DatePicker,
  DateRangePicker,
} from "xplorer-ui";
import { addMonths } from "date-fns";

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
          description="Enter employee name description"
        />
        <DatePicker
          placeholder="Date of Joining"
          label="Date of Joining"
          name="dateOfJoining"
          control={form.control}
          minDate={addMonths(new Date(), -13)}
          maxDate={addMonths(new Date(), 13)}
          description="Enter date of joining description"
        />

        <DateRangePicker
          placeholder="Select Date Range"
          label="Select Date Range"
          name="range"
          control={form.control}
          onClearInput={() => form.resetField("range")}
          description="Enter date of joining description"
        />

        <SwitchInput
          control={form.control}
          name="active"
          label="Active"
          description="Employee active description"
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
