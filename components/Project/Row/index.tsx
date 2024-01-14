import Image, { StaticImageData } from "next/image";
import styles from "./ProjectGeneric.module.scss";

import { ReactNode } from "react";

type ProjectGenericProps = {
  title: string;
  image: StaticImageData;
  sizing?: string;
  content: ReactNode;
};

export default function ProjectGeneric({
  title,
  image,
  sizing = "height",
  content,
}: ProjectGenericProps) {
  const genericStyle = `${styles.generic} ${styles[`generic--${sizing}`]}`;

  return (
    <section className={genericStyle}>
      <Image
        alt=""
        src={image.src}
        className={styles.generic__image}
        placeholder="blur"
      />

      <div className={styles.generic__column}>
        <div className={styles.generic__titles}>
          <h2 className={styles.generic__title}>{title}</h2>
        </div>

        <div className={styles.generic__content}>{content}</div>
      </div>
    </section>
  );
}
