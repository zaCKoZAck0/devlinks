import * as React from "react";
import { cn } from "~/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  error?: string; // Error message prop
  icon?: React.ReactNode; // Icon prop
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="relative w-full flex items-center">
        {/* Icon */}
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {props.icon}
        </span>

        {/* Input */}
        <input
          type={type}
          className={cn(
            "flex h-12 w-full text-lg rounded-md border bg-transparent pl-10 pr-3 focus-visible:shadow-[0_0_20px_#BEADFF] placeholder:text-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-none transition-all",
            "peer", // Used for pseudo-class styling
            error
              ? "peer-invalid border-destructive text-destructive"
              : "peer-valid",
            className,
          )}
          ref={ref}
          {...props}
        />

        {/* Error Message */}
        <span className="absolute right-3 top-1/3 text-xs bg-card/50 text-destructive peer-invalid:block">
          {error}
        </span>
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
