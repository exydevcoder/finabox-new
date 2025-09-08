import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { HTMLInputTypeAttribute } from 'react';

interface FormInputFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  maxLength?: number;
  className?: string;
  disabled?: boolean;
}

export default function FormInputField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  maxLength,
  className = "",
  disabled = false,
}: FormInputFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className=" text-white text-sm font-medium leading-4">
            {label}
          </FormLabel>
          <FormControl>
            <Input 
              type={type}
              placeholder={placeholder}
              maxLength={maxLength}
              disabled={disabled}
              {...field} 
              className={`w-full !h-10 bg-white border-white/20 text-black rounded-[6.75px] focus:border-indigo-400 focus:ring-indigo-400
                placeholder:text-gray-500 placeholder:text-xs placeholder:font-normal placeholder:leading-4
                
                ${className}`}
            />
          </FormControl>
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
}