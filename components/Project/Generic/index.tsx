import Image from "next/image";
import styles from "./ProjectGeneric.module.scss";

import { ImageType, WidthType } from "@/types";
import { CSSProperties, ReactNode } from "react";

type ProjectGenericImage = ImageType & {
  size: WidthType;
};

type ProjectGenericProps = {
  color: string;
  title: string;
  border: string;
  images: ProjectGenericImage[];
  content: ReactNode;
  divider?: boolean;
  subtitle?: string;
};

export default function ProjectGeneric({
  color,
  title,
  border,
  images,
  content,
  divider,
  subtitle,
}: ProjectGenericProps) {
  const genericStyle = {
    "--local-color": color,
    "--local-border": border,
  } as CSSProperties;

  return (
    <section className={styles.generic} style={genericStyle}>
      {subtitle && <h3 className={styles.generic__subtitle}>{subtitle}</h3>}

      <h2 className={styles.generic__title}>{title}</h2>

      <p className={styles.generic__content}>{content}</p>

      {divider && <div className={styles.generic__divider}></div>}

      {/* TODO: Move to a seperate component */}
      <div className={styles.generic__container}>
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
      </div>
    </section>
  );
}
