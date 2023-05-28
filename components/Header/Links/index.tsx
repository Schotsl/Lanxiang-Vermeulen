"use client";

import styles from "./HeaderLinks.module.scss";

export default function HeaderLinks() {
  return (
    <ul className={styles.links}>
      <li className={styles.links_item}>
        <a className={styles.links_link} href="design.html">
          Design
        </a>
      </li>
      <li className={styles.links_item}>
        <a className={styles.links_link} href="fotografie.html">
          Fotografie
        </a>
      </li>
      <li className={styles.links_item}>
        <a className={styles.links_link} href="overmij.html">
          Over mij
        </a>
      </li>
      <li className={styles.links_item}>
        <a className={styles.links_link} href="contact.html">
          Contact
        </a>
      </li>
    </ul>
  );
}
