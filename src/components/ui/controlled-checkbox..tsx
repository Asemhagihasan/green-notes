import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";

import { Checkbox } from "./checkbox";

interface ControlledCheckboxProps {
  name: string;
  label?: string;
  className?: string;
}

const ControlledCheckbox: React.FC<ControlledCheckboxProps> = ({
  name,
  label,
  className,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormItem>
      <div className={className}>
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <div className="flex items-center space-x-2">
              <FormControl>
                <Checkbox
                  id={name}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              {label && (
                <FormLabel
                  htmlFor={name}
                  className={`text-sm font-medium cursor-pointer ${
                    errors[name] ? "!text-red-500" : ""
                  }`}
                >
                  {label}
                </FormLabel>
              )}
            </div>
          )}
        />
        {errors[name] && (
          <FormMessage className="text-red-500 mt-1">
            {errors[name]?.message as string}
          </FormMessage>
        )}
      </div>
    </FormItem>
  );
};

export default ControlledCheckbox;
