import { cn } from "@/src/shared/utils/cn";
import React from "react";

type TitleVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TitleProps<T extends TitleVariant> = {
  variant: T;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export function Title<T extends TitleVariant>({
  variant,
  children,
  className,
  ...rest
}: TitleProps<T>) {
  const Component = variant as React.ElementType;

  return (
    <Component className={cn("text-3xl", className)} {...rest}>
      {children}
    </Component>
  );
}