import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";

import { Textarea } from "./textarea";

interface ControlledTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
}

const ControlledTextarea: React.FC<ControlledTextareaProps> = ({
  name,
  label,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormItem>
      <div>
        {label && (
          <FormLabel
            htmlFor={name}
            className={`block text-sm font-medium text-grayscale-900 mb-2 ${
              errors[name] ? "!text-red-500" : ""
            }`}
          >
            {label}
          </FormLabel>
        )}

        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <div className="flex w-full flex-col relative">
              <FormControl>
                <Textarea {...field} {...props} />
              </FormControl>
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

export default ControlledTextarea;
