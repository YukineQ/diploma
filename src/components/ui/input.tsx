import * as React from "react"

import { cn } from "@/lib/utils"
import { FieldWrapper, FieldWrapperPassThroughProps } from './field-wrapper';
import { UseFormRegisterReturn } from "react-hook-form";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    className?: string;
    registration?: Partial<UseFormRegisterReturn>;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, registration, ...props }, ref) => {
    return (
      <FieldWrapper label={label} error={error}>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md bg-inherit border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-green-500",
            className
          )}
          ref={ref}
          {...registration}
          {...props}
        />
      </FieldWrapper>
    )
  }
)
Input.displayName = "Input"

export { Input }
