import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface CardMiniProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string | ReactNode;
  rubric: string;
  publicTime: string;
  readTime: string;
  likes: number;
  url: string;
  image: {
    url: string;
  };
}
