"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectItem.module.scss";

import { Project } from "@/types";
import { useEffect, useState, useRef } from "react";

type ProjectsItemProps = {
  project: Project;
};

export default function ProjectsItem({
  project: { width, title, image, client, subtitle },
}: ProjectsItemProps) {
  const [height, setHeight] = useState(0);

  const itemRef = useRef<HTMLDivElement>(null);
  const itemStyle = { height: `${height}px` };
  const itemClasses = `${styles.project} ${styles[`project--${width}`]}`;

  useEffect(() => {
    if (itemRef.current) {
      const innerWidth = window.innerWidth

      if (innerWidth == width) {
        
      }
      console.log(window.innerWidth);

      switch (width) {
        case "one-third":
          setHeight(itemRef.current.clientWidth * 1.5);
          break;
        case "two-third":
          setHeight((itemRef.current.clientWidth - 32) * 0.75);
          break;
      }
    }
  }, [width]);

  return (
    <article className={itemClasses} style={itemStyle} ref={itemRef}>
      <Link className={styles.project__link} href="/design/test">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={styles.project__image}
        />

        <div className={styles.project__overlay}>
          <h2 className={styles.project__subtitle}>
            {subtitle}
            <span className={styles.project__title}>{title}</span>
          </h2>

          <p className={styles.project__client}>
            Opdrachtgever |{" "}
            <span className={styles.project__value}>{client}</span>
          </p>

          <div className={styles.project__divider}></div>
        </div>
      </Link>
    </article>
  );
}
