import type { ComponentProps } from "react";
import { cn } from "~/lib/utils";

const Card = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card"
    className={cn(
      "bg-card text-card-foreground rounded-xl border shadow-sm",
      className,
    )}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card-header"
    className={cn("flex flex-col gap-1.5 p-6", className)}
    {...props}
  />
);

const CardTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card-title"
    className={cn("leading-none font-semibold tracking-tight", className)}
    {...props}
  />
);

const CardDescription = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card-description"
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
);

const CardContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card-content"
    className={cn("p-6 pt-0", className)}
    {...props}
  />
);

const CardFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card-footer"
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
