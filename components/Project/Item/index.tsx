"use client";

import Image from "next/image";
import styles from "./ProjectItem.module.scss";

import { Project } from "@/types";

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({
  project: {
    title,
    image: { src, alt, width, height },
    client,
    subtitle,
  },
}: ProjectItemProps) {
  return (
    <article className={styles.project}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.project__image}
      />

      <h2 className={styles.project__title}>
        {subtitle}
        <span className={styles.project__subtitle}>{title}</span>
      </h2>

      <p className={styles.project__client}>
        Opdrachtgever | <span className={styles.project__value}>{client}</span>
      </p>

      <div className={styles.project__divider}></div>
    </article>
  );
}
