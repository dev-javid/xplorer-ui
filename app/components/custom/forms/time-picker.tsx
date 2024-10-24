import { useState, useEffect } from "react";
import { FieldValues, useController } from "react-hook-form";
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
  FormInputProps,
} from "@/index";
import { Clock } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props<TFieldValues extends FieldValues = FieldValues, TContext = any>
  extends FormInputProps<TFieldValues, TContext> {
  placeholder: string;
  minDate?: Date;
  maxDate?: Date;
  use24HourFormat?: boolean;
}
const TimePicker = <
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
  use24HourFormat = false,
}: Props<TFieldValues, TContext>) => {
  const { field } = useController({ name, control });
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [period, setPeriod] = useState<"AM" | "PM">("AM");

  useEffect(() => {
    if (field.value) {
      const date = new Date(field.value);
      setHour(use24HourFormat ? date.getHours() : date.getHours() % 12 || 12);
      setMinute(date.getMinutes());
      setPeriod(date.getHours() >= 12 ? "PM" : "AM");
    }
  }, [field.value, use24HourFormat]);

  const formatTime = (hour: number, minute: number, period: "AM" | "PM") => {
    if (use24HourFormat) {
      return `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
    }
    return `${hour}:${minute.toString().padStart(2, "0")} ${period}`;
  };

  const hours = use24HourFormat
    ? Array.from({ length: 24 }, (_, i) => i)
    : Array.from({ length: 12 }, (_, i) => i + 1);

  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const handleHourChange = (newHour: string) => {
    setHour(parseInt(newHour));
    updateFieldValue(parseInt(newHour), minute, period);
  };

  const handleMinuteChange = (newMinute: string) => {
    setMinute(parseInt(newMinute));
    updateFieldValue(hour, parseInt(newMinute), period);
  };

  const handlePeriodChange = (newPeriod: "AM" | "PM") => {
    setPeriod(newPeriod);
    updateFieldValue(hour, minute, newPeriod);
  };

  const updateFieldValue = (
    hour: number,
    minute: number,
    period: "AM" | "PM"
  ) => {
    const date = new Date();
    let hours = hour;
    if (!use24HourFormat) {
      hours = period === "PM" ? (hour % 12) + 12 : hour % 12;
    }
    date.setHours(hours, minute, 0, 0);
    field.onChange(date);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { value } }) => (
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
                  <Clock className="mr-2 h-4 w-4" />
                  {value
                    ? formatTime(hour, minute, period)
                    : placeholder || "Select time"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div className="flex items-center justify-between space-x-2 p-2">
                  <Select
                    value={hour.toString()}
                    onValueChange={handleHourChange}
                    disabled={disabled}
                  >
                    <SelectTrigger className="w-[70px]">
                      <SelectValue placeholder="Hour" />
                    </SelectTrigger>
                    <SelectContent>
                      {hours.map((h) => (
                        <SelectItem key={h} value={h.toString()}>
                          {h.toString().padStart(2, "0")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={minute.toString()}
                    onValueChange={handleMinuteChange}
                    disabled={disabled}
                  >
                    <SelectTrigger className="w-[70px]">
                      <SelectValue placeholder="Minute" />
                    </SelectTrigger>
                    <SelectContent>
                      {minutes.map((m) => (
                        <SelectItem key={m} value={m.toString()}>
                          {m.toString().padStart(2, "0")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {!use24HourFormat && (
                    <Select
                      value={period}
                      onValueChange={handlePeriodChange}
                      disabled={disabled}
                    >
                      <SelectTrigger className="w-[70px]">
                        <SelectValue placeholder="AM/PM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AM">AM</SelectItem>
                        <SelectItem value="PM">PM</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </div>
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
export { TimePicker };
