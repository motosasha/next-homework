import { ReactElement } from "react";
import clsx from "clsx";

import IconLike from "./icon-like.svg";
import type { LikeProps } from "./Like.props";
import styles from "./Like.module.scss";

export default function Like({
  isLiked,
  onLikeChange,
  className,
  ...props
}: LikeProps): ReactElement {
  return (
    <button
      className={clsx(styles.like, isLiked && styles.isLiked, className)}
      onClick={() => onLikeChange(!isLiked)}
      aria-label={isLiked ? "Unlike" : "Like"}
      {...props}
    >
      <IconLike className={styles.icon} />
    </button>
  );
}
