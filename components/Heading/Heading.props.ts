import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface HeadingProps extends ComponentPropsWithoutRef<"h1"> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
}
