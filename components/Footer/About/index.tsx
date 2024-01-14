import styles from "./FooterAbout.module.scss";

import { ReactNode } from "react";

type FooterAboutProps = {
  text: ReactNode;
  title: ReactNode;
  rights: ReactNode;
};

export default function FooterAbout({ text, title, rights }: FooterAboutProps) {
  return (
    <div className={styles.about}>
      <h3 className={styles.about__title}>{title}</h3>

      <p className={styles.about__text}>{text}</p>

      <p className={styles.about__rights}>{rights}</p>
    </div>
  );
}
