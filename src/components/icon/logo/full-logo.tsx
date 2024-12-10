import { cn } from "~/lib/utils";
import { Logo } from ".";

export function FullLogo({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn("flex text-3xl items-center gap-2", className)}
    >
      <Logo className="text-primary size-8" />
      <div className="text-foreground font-bold">devlinks</div>
    </div>
  );
}
