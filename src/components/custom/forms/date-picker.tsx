import { useState, useEffect } from "react";
import { FieldValues, useController } from "react-hook-form";
import { format } from "date-fns";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Calendar,
  FormInputProps,
} from "@/index";
import { CalendarIcon } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props<TFieldValues extends FieldValues = FieldValues, TContext = any>
  extends FormInputProps<TFieldValues, TContext> {
  placeholder: string;
  minDate?: Date;
  maxDate?: Date;
}

const DatePicker = <
  TFieldValues extends FieldValues = FieldValues,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TContext = any
>({
  control,
  placeholder,
  name,
  label,
  description,
  disabled,
  className,
  minDate,
  maxDate,
}: Props<TFieldValues, TContext>) => {
  const { field } = useController({ name, control });
  const [month, setMonth] = useState(
    field.value ? field.value.getMonth() : new Date().getMonth()
  );
  const [year, setYear] = useState(
    field.value ? field.value.getFullYear() : new Date().getFullYear()
  );

  useEffect(() => {
    if (field.value) {
      setMonth(field.value.getMonth());
      setYear(field.value.getFullYear());
    }
  }, [field.value]);

  const formatDate = (date: Date | null) => {
    return date ? format(date, "MMM do yyyy") : placeholder || "Select date";
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const minYear = minDate
    ? minDate.getFullYear()
    : new Date().getFullYear() - 100;
  const maxYear = maxDate
    ? maxDate.getFullYear()
    : new Date().getFullYear() + 100;
  const years = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => minYear + i
  );

  const handleMonthChange = (newMonth: string) => {
    setMonth(parseInt(newMonth));
    if (field.value) {
      const newDate = new Date(field.value);
      newDate.setMonth(parseInt(newMonth));
      field.onChange(newDate);
    }
  };

  const handleYearChange = (newYear: string) => {
    setYear(parseInt(newYear));
    if (field.value) {
      const newDate = new Date(field.value);
      newDate.setFullYear(parseInt(newYear));
      field.onChange(newDate);
    }
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left font-normal ${
                    !value && "text-muted-foreground"
                  }`}
                  disabled={disabled}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formatDate(value)}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div className="flex items-center justify-between space-x-2 px-4 pt-2 pb-0">
                  <Select
                    value={month.toString()}
                    onValueChange={handleMonthChange}
                    disabled={disabled}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month, index) => (
                        <SelectItem key={month} value={index.toString()}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={year.toString()}
                    onValueChange={handleYearChange}
                    disabled={disabled}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Calendar
                  className="mt-0"
                  mode="single"
                  selected={value}
                  onSelect={(date) => {
                    onChange(date);
                    if (date) {
                      setMonth(date.getMonth());
                      setYear(date.getFullYear());
                    }
                  }}
                  month={new Date(year, month)}
                  onMonthChange={(date) => {
                    setMonth(date.getMonth());
                    setYear(date.getFullYear());
                  }}
                  disabled={isDateDisabled}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { DatePicker };
