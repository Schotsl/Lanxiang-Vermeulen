import Image from "next/image";
import Button from "@/components/Button";

import styles from "./ProjectHeader.module.scss";

import { ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { StaticImageData } from "next/image";

type ProjectHeaderProps = {
  color: string;
  title: string;
  image: StaticImageData;
  prefix?: string;
  suffix?: string;
  content?: ReactNode;
};

// TODO: Rename this to intro

export default function ProjectHeader({
  color,
  title,
  image,
  prefix,
  suffix,
  content,
}: ProjectHeaderProps) {
  const dividerStyle = { backgroundColor: color };

  return (
    <section className={styles.header}>
      <div className={styles.header__sidebar}>
        <Button
          icon={<FaArrowLeft />}
          href="/design"
          size="small"
          color="white"
          title="Ga terug"
        />

        <div className={styles.header__inner}>
          <h1 className={styles.header__title}>
            {prefix}

            {prefix || suffix ? (
              <span className={styles.header__title__colored} style={{ color }}>
                {" "}
                &#8220;{title}&#8221;{" "}
              </span>
            ) : (
              <span className={styles.header__title__normal}>{title}</span>
            )}

            {suffix}
          </h1>

          {content && <p className={styles.header__content}>{content}</p>}

          <div className={styles.header__divider} style={dividerStyle} />
        </div>
      </div>

      <Image
        alt=""
        src={image}
        sizes={"50vw"}
        className={styles.header__image}
      />
    </section>
  );
}
