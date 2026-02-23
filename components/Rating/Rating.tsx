"use client";

import { KeyboardEvent, useState } from "react";
import clsx from "clsx";

import type { RatingProps } from "./Rating.props";
import styles from "./Rating.module.scss";

export default function Rating({
  value,
  setRating,
  max = 5,
  readOnly = false,
  className,
  starClassName,
  ref,
  ...props
}: RatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const displayValue = hoverValue ?? value;

  const handleAction = (index: number) => {
    if (!readOnly && setRating) {
      setRating(index);
    }
  };

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleAction(index);
    }
  };

  return (
    <div ref={ref} className={clsx(styles.rating, className)} {...props}>
      {Array.from({ length: max }).map((_, i) => {
        const starIndex = i + 1;
        const isActive = starIndex <= displayValue;

        return (
          <div
            key={starIndex}
            className={clsx(
              styles.star,
              isActive && styles.active,
              starClassName
            )}
            onMouseEnter={() => !readOnly && setHoverValue(starIndex)}
            onMouseLeave={() => !readOnly && setHoverValue(null)}
            onClick={() => handleAction(starIndex)}
            role={readOnly ? "presentation" : "button"}
            tabIndex={readOnly ? -1 : 0}
            onKeyDown={(e) => handleKeyDown(e, starIndex)}
            aria-label={`Rate ${starIndex} out of ${max}`}
            aria-pressed={!readOnly ? isActive : undefined}
          >
            {isActive ? "★" : "☆"}
          </div>
        );
      })}
    </div>
  );
}
