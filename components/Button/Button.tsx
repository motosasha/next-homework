import { ReactElement } from "react";
import clsx from "clsx";

import IconShevronRight from "./icon-shevron-right.svg";
import type { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";

export default function Button({
  children,
  variant = "primary",
  arrow = "none",
  className,
  ...props
}: ButtonProps): ReactElement {
  return (
    <button
      className={clsx(
        styles.button,
        {
          [styles.primary]: variant === "primary",
          [styles.secondary]: variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={clsx(styles.icon, {
            [styles.down]: arrow === "down",
          })}
        >
          <IconShevronRight />
        </span>
      )}
    </button>
  );
}
