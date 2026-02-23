import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface ParagraphProps extends ComponentPropsWithoutRef<"p"> {
  size: "small" | "medium" | "large";
  children: ReactNode;
}
