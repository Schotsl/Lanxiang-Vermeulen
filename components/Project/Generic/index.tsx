import Image from "next/image";
import styles from "./ProjectGeneric.module.scss";

import { ReactNode } from "react";
import { ImageType, WidthType } from "@/types";

type ProjectGenericImage = ImageType & {
  size: WidthType;
};

type ProjectGenericProps = {
  title: string;
  images: ProjectGenericImage[];
  content: ReactNode;
  divider?: boolean;
  subtitle?: string;
};

export default function ProjectGeneric({
  title,
  images,
  content,
  divider,
  subtitle,
}: ProjectGenericProps) {
  return (
    <section className={styles.generic}>
      {subtitle && <h3 className={styles.generic__subtitle}>{subtitle}</h3>}

      <h2 className={styles.generic__title}>{title}</h2>

      <p className={styles.generic__content}>{content}</p>

      {divider && <div className={styles.generic__divider}></div>}

      {/* TODO: Move to a seperate component */}
      <ul className={styles.generic__images}>
        {images.map((image) => {
          const imageWidth = `generic__image--${image.size}`;
          const imageClasses = `${styles.generic__image} ${styles[imageWidth]}`;

          return (
            <li className={imageClasses} key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
