import { ReactElement } from "react";
import clsx from "clsx";

import type { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.scss";

export default function Paragraph({
  size = "medium",
  children,
  className,
  ...props
}: ParagraphProps): ReactElement {
  return (
    <p
      className={clsx(
        styles.paragraph,
        {
          [styles.small]: size === "small",
          [styles.medium]: size === "medium",
          [styles.large]: size === "large",
        },
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
