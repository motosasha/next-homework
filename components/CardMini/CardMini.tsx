"use client";

import { ReactElement } from "react";

import Image from "next/image";
import { ButtonLike } from "@/components/ButtonLike";
import { ButtonMore } from "@/components/ButtonMore";

import { CardMiniProps } from "./CardMini.props";
import styles from "./CardMini.module.scss";

export default function CardMini({
  title,
  description,
  rubric,
  publicTime,
  readTime,
  likes,
  url,
  image,
}: CardMiniProps): ReactElement {
  return (
    <div className={styles["card-mini"]}>
      <Image
        src={image.url}
        alt={title}
        width={330}
        height={200}
        className={styles.image}
      />
      <div className={styles.row}>
        <div className={styles.info}>
          {rubric} • {publicTime}
        </div>
        <ButtonLike>{likes}</ButtonLike>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.descr}>{description}</p>
      <div className={styles.row}>
        <div className={styles.info}>{readTime}</div>
        <ButtonMore onClick={() => window.open(url, "_self")}>
          Читать
        </ButtonMore>
      </div>
    </div>
  );
}
