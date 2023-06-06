"use client";

import styles from "./HeaderLinks.module.scss";

import { usePathname } from "next/navigation";

export default function HeaderLinks() {
  const pathname = usePathname();

  const linkClasses = (path: string) => {
    const itemActive = pathname.startsWith(path);
    const itemClasses = itemActive
      ? `${styles.links__link} ${styles["links__link--active"]}`
      : `${styles.links__link}`;

    return itemClasses;
  };

  return (
    <ul className={styles.links}>
      <li className={styles.links__item}>
        <a className={linkClasses("/design")} href="/design">
          Design
        </a>
      </li>
      {/* <li className={styles.links__item}>
        <a className={linkClasses("/fotografie")} href="/fotografie">
          Fotografie
        </a>
      </li> */}
      <li className={styles.links__item}>
        <a className={linkClasses("/over-mij")} href="/over-mij">
          Over mij
        </a>
      </li>
      {/* <li className={styles.links__item}>
        <a className={linkClasses("/contact")} href="/contact">
          Contact
        </a>
      </li> */}
    </ul>
  );
}
