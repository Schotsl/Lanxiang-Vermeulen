"use client";

import styles from "./FooterAbout.module.scss";

import { ReactNode } from "react";

type FooterAboutProps = {
  text: ReactNode;
  title: ReactNode;
  rights: ReactNode;
};

export default function FooterAbout({ text, title, rights }: FooterAboutProps) {
  return (
    <div className={styles.footer__about}>
      <h3 className={styles.footer__title}>{title}</h3>

      <p className={styles.footer__text}>{text}</p>

      <p className={styles.footer__rights}>{rights}</p>
    </div>
  );
}
