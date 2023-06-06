import Image from "next/image";
import Button from "@/components/Button";

import styles from "./ProjectHeader.module.scss";

import { ReactNode } from "react";
import { ImageType } from "@/types";
import { FaArrowLeft } from "react-icons/fa";

type ProjectHeaderProps = {
  title: string;
  image: ImageType;
  content: ReactNode;
};

// TODO: Rename this to intro

export default function ProjectHeader({
  title,
  image,
  content,
}: ProjectHeaderProps) {
  return (
    <section className={styles.header}>
      <div className={styles.header__sidebar}>
        <Button
          icon={<FaArrowLeft />}
          href="mailto:info@lxframes.nl"
          size="small"
          color="white"
          title="Ga terug"
        />

        <div className={styles.header__inner}>
          <h1 className={styles.header__title}>{title}</h1>
          <p className={styles.header__content}>{content}</p>
          <div className={styles.header__divider}></div>
        </div>
      </div>

      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={styles.header__image}
      />
    </section>
  );
}
