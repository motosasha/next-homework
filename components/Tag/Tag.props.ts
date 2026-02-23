import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type TagOwnProps = {
  variant: "category" | "chip" | "skill" | "sum" | "warn";
  children: ReactNode;
  className?: string;
};

export type TagProps<T extends ElementType> = TagOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof TagOwnProps> & {
    as?: T;
  };
