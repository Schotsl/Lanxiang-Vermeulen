"use client";

import Image from "next/image";
import styles from "./ProjectItem.module.scss";

import { Project } from "@/types";

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({
  project: { width, title, image, client, subtitle },
}: ProjectItemProps) {
  const itemClasses = `${styles.project} ${styles[`project--${width}`]}`;

  return (
    <article className={itemClasses}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={styles.project__image}
      />

      <div className={styles.project__overlay}>
        <h2 className={styles.project__title}>
          {subtitle}
          <span className={styles.project__subtitle}>{title}</span>
        </h2>

        <p className={styles.project__client}>
          Opdrachtgever |{" "}
          <span className={styles.project__value}>{client}</span>
        </p>

        <div className={styles.project__divider}></div>
      </div>
    </article>
  );
}
