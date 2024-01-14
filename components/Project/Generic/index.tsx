import Image, { StaticImageData } from "next/image";

import styles from "./ProjectGeneric.module.scss";

import { ImageType, WidthType } from "@/types";
import { CSSProperties, ReactNode } from "react";

type ProjectGenericImage = {
  size: WidthType;
  image: StaticImageData;
};

type ProjectGenericProps = {
  id?: string;
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
  id,
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
    <section className={genericClasses} style={genericStyle} id={id}>
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
            {images.map((image, index) => {
              const imageWidth = `generic__image--${image.size}`;
              const imageClasses = `${styles.generic__image} ${styles[imageWidth]}`;

              return (
                <li className={imageClasses} key={index}>
                  <Image alt="" src={image.image} placeholder="blur" />
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
