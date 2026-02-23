import { ElementType } from "react";
import clsx from "clsx";

import { TagProps } from "./Tag.props";
import styles from "./Tag.module.scss";

export default function Tag<T extends ElementType = "div">({
  as,
  variant = "category",
  children,
  className,
  ...props
}: TagProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={clsx(
        styles.tag,
        {
          [styles.category]: variant === "category",
          [styles.chip]: variant === "chip",
          [styles.skill]: variant === "skill",
          [styles.sum]: variant === "sum",
          [styles.warn]: variant === "warn",
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// export default function Tag({
//   variant = "category",
//   children,
//   href,
//   className,
//   ...props
// }: TagProps): ReactElement {
//   if (href) {
//     return (
//       <a
//         href={href}
//         {...props}
//       >
//         {children}
//       </a>
//     );
//   }
//
//   return (
//     <div
//       className={clsx(
//         styles.paragraph,
//         {
//           [styles.category]: variant === "category",
//           [styles.chip]: variant === "chip",
//           [styles.skill]: variant === "skill",
//           [styles.sum]: variant === "sum",
//           [styles.warn]: variant === "warn",
//         },
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </div>
//   );
// }
