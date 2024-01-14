"use client";

import Image from "next/image";
import Button from "@/components/Button";

import styles from "./ProjectHeader.module.scss";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { StaticImageData } from "next/image";

type ProjectHeaderProps = {
  back?: boolean;
  color: string;
  title: ReactNode;
  image: StaticImageData;
  prefix?: string;
  suffix?: string;
  content?: ReactNode;
  position?: "top" | "center" | "bottom";
};

// TODO: Rename this to intro

export default function ProjectHeader({
  back = true,
  color,
  title,
  image,
  prefix,
  suffix,
  content,
  position = "center"
}: ProjectHeaderProps) {
  const fullPathname = usePathname();
  const startPathname = `/${fullPathname.split("/")[1]}`;

  return (
    <section className={styles.header}>
      <div className={styles.header__sidebar}>
        {back && (
          <Button
            icon={<FaArrowLeft />}
            href={startPathname}
            size="small"
            color="white"
            title="Ga terug"
          />
        )}

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

          <div
            className={styles.header__divider}
            style={{
              backgroundColor: color,
              marginTop: content ? "3rem" : "0.5rem"
            }}
          />
        </div>
      </div>

      <Image
        alt=""
        src={image}
        sizes={"50vw"}
        className={styles.header__image}
        placeholder="blur"
        style={{ objectPosition: position }}
      />
    </section>
  );
}
