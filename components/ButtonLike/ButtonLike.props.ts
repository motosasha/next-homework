import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface ButtonLikeProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}
