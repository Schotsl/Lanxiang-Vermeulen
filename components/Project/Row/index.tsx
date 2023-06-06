import Image from "next/image";
import styles from "./ProjectGeneric.module.scss";

import { ImageType } from "@/types";
import { ReactNode } from "react";

type ProjectGenericProps = {
  title: string;
  image: ImageType;
  content: ReactNode;
  subtitle?: string;
};

export default function ProjectGeneric({
  title,
  image,
  content,
  subtitle,
}: ProjectGenericProps) {
  return (
    <section className={styles.generic}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={styles.generic__image}
      />

      <div className={styles.generic__column}>
        <div className={styles.generic__titles}>
          {subtitle && <h3 className={styles.generic__subtitle}>{subtitle}</h3>}

          <h2 className={styles.generic__title}>{title}</h2>
        </div>

        <div className={styles.generic__content}>{content}</div>
      </div>
    </section>
  );
}
