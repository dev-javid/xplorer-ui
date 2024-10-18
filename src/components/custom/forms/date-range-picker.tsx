import { useState, useEffect } from "react";
import { FieldValues, useController } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  FormInputProps,
} from "@/index";
import { differenceInDays, format } from "date-fns";
import { CalendarDays, X } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props<TFieldValues extends FieldValues = FieldValues, TContext = any>
  extends FormInputProps<TFieldValues, TContext> {
  placeholder: string;
  minDate?: Date;
  maxDate?: Date;
  onClearInput?: () => void;
}

export interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

const DateRangePicker = <
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
  onClearInput,
}: Props<TFieldValues, TContext>) => {
  const { field, fieldState } = useController({ name, control });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error = fieldState?.error as any;
  const [date, setDate] = useState<DateRange>(
    field.value || { from: undefined, to: undefined }
  );
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    if (field.value) {
      setDate(field.value);
      if (field.value.from) {
        setMonth(field.value.from.getMonth());
        setYear(field.value.from.getFullYear());
      }
    }
  }, [field.value]);

  const formatDateRange = (range: DateRange) => {
    if (range.from && range.to) {
      return `${format(range.from, "MMM do yyyy")} - ${format(
        range.to,
        "MMM do yyyy"
      )}`;
    }
    if (range.from) {
      return `${format(range.from, "MMM do yyyy")} - ...`;
    }

    return placeholder || "Select date range";
  };

  const formatDays = (range: DateRange) => {
    if (range.from && range.to) {
      const days = differenceInDays(range.to, range.from) + 1;
      return days === 1 ? `(${days} day)` : `(${days} days)`;
    }
    return "";
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
  };

  const handleYearChange = (newYear: string) => {
    setYear(parseInt(newYear));
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
            <div className="flex items-center space-x-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-start text-left font-normal ${
                      !value && "text-muted-foreground"
                    }`}
                    disabled={disabled}
                  >
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {formatDateRange(date)}
                    <div className="ml-2 text-primary">{formatDays(date)}</div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <div className="flex items-center justify-between space-x-2 p-2">
                    <Select
                      value={month.toString()}
                      onValueChange={handleMonthChange}
                      disabled={disabled}
                    >
                      <SelectTrigger className="w-[110px]">
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
                      <SelectTrigger className="w-[110px]">
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
                    mode="range"
                    selected={date}
                    onSelect={(newDate) => {
                      setDate(
                        newDate
                          ? {
                              from: newDate.from,
                              to: newDate.to,
                            }
                          : newDate || { from: undefined, to: undefined }
                      );
                      onChange(newDate);
                    }}
                    month={new Date(year, month)}
                    onMonthChange={(newMonth) => {
                      setMonth(newMonth.getMonth());
                      setYear(newMonth.getFullYear());
                    }}
                    disabled={isDateDisabled}
                    numberOfMonths={2}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Tooltip>
                <TooltipTrigger>
                  {onClearInput && (
                    <X
                      onClick={(e) => {
                        e.preventDefault();
                        onClearInput();
                      }}
                    />
                  )}
                </TooltipTrigger>
                <TooltipContent>Clear value</TooltipContent>
              </Tooltip>
            </div>
          </FormControl>
          <p className="text-[0.8rem] font-medium text-destructive">
            {error?.from?.message || error?.to?.message}
          </p>
          <FormDescription>{description}</FormDescription>
        </FormItem>
      )}
    />
  );
};

export { DateRangePicker };
