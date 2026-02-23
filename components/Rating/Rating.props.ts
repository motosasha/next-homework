import { ComponentPropsWithoutRef, Ref } from "react";

export interface RatingProps extends ComponentPropsWithoutRef<"div"> {
  value: number;
  max?: number;
  setRating?: (val: number) => void;
  readOnly?: boolean;
  starClassName?: string;
  ref?: Ref<HTMLDivElement>;
}
