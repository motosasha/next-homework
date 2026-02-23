import { ReactElement } from "react";
import clsx from "clsx";

import IconArrowRight from "./icon-arrow-right.svg";
import type { ButtonMoreProps } from "./ButtonMore.props";
import styles from "./ButtonMore.module.scss";

export default function Button({
  children,
  className,
  ...props
}: ButtonMoreProps): ReactElement {
  return (
    <button
      className={clsx(styles["button-more"], className)}
      {...props}
      aria-label="Показать больше"
    >
      {children}
      <span className={clsx(styles.icon)}>
        <IconArrowRight />
      </span>
    </button>
  );
}
