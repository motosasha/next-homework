import { ComponentPropsWithoutRef } from "react";

export interface LikeProps extends ComponentPropsWithoutRef<"button"> {
  isLiked: boolean;
  onLikeChange: (isLiked: boolean) => void;
}
