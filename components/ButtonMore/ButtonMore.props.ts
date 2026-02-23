import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface ButtonMoreProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}
