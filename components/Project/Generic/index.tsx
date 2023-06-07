import Image from "next/image";
import Button from "@/components/Button";
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
  sizing?: "height" | "width";
  images?: ProjectGenericImage[];
  content: ReactNode;
  buttons?: ReactNode[];
  divider?: boolean;
  subtitle?: string;
};

export default function ProjectGeneric({
  color,
  title,
  border,
  images,
  sizing = "height",
  content,
  buttons = [],
  divider,
  subtitle,
}: ProjectGenericProps) {
  const genericStyle = {
    "--local-color": color,
    "--local-border": border,
  } as CSSProperties;

  const genericClasses = `${styles.generic} ${styles[`generic--${sizing}`]}`;

  return (
    <section className={genericClasses} style={genericStyle}>
      {subtitle && <h3 className={styles.generic__subtitle}>{subtitle}</h3>}

      <h2 className={styles.generic__title}>{title}</h2>

      <p className={styles.generic__content}>{content}</p>

      {divider && <div className={styles.generic__divider}></div>}

      <div className={styles.generic__buttons}>{buttons}</div>

      {/* TODO: Move to a seperate component */}
      {/* // If images have been provided */}
      {(images && (
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
      )) || (
        <iframe
          width="560"
          height="315"
          className={styles.generic__video}
          src="https://www.youtube.com/embed/gAsLaRyj4co"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </section>
  );
}
