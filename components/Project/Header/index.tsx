import Image from "next/image";
import styles from "./ProjectHeader.module.scss";

import { ReactNode } from "react";
import { ImageType } from "@/types";

type ProjectHeaderProps = {
  title: string;
  image: ImageType;
  content: ReactNode;
};

export default function ProjectHeader({
  title,
  image,
  content,
}: ProjectHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header__sidebar}>
        <button className={styles.header__button} aria-label="Go back">
          Ga terug
        </button>

        <h1 className={styles.header__title}>{title}</h1>

        <p className={styles.header__content}>{content}</p>

        <div className={styles.header__divider}></div>
      </div>

      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={styles.header__image}
      />
    </header>
  );
}
