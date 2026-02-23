import { ReactElement } from "react";
import clsx from "clsx";

import IconLike from "./icon-like.svg";
import type { ButtonLikeProps } from "./ButtonLike.props";
import styles from "./ButtonLike.module.scss";

export default function Button({
  children,
  className,
  ...props
}: ButtonLikeProps): ReactElement {
  return (
    <button
      className={clsx(styles["button-like"], className)}
      {...props}
      aria-label="Поставить лайк"
    >
      {children}
      <span className={clsx(styles.icon)}>{<IconLike />}</span>
    </button>
  );
}
