import { ReactElement } from "react";
import clsx from "clsx";

import { HeadingProps } from "./Heading.props";
import styles from "./Heading.module.scss";

export default function Heading({
  as,
  children,
  className,
  ...props
}: HeadingProps): ReactElement {
  const Component = as || "h1";

  return (
    <Component
      className={clsx(styles[`h${as?.replace("h", "") || "1"}`], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
