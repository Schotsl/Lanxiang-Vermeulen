"use client";

import styles from "./FooterList.module.scss";

import { Link } from "@/types";

type FooterListProps = {
  title: string;
  links: Link[];
};

export default function FooterList({ title, links }: FooterListProps) {
  return (
    <div className={styles.footer__column}>
      <h3 className={styles.footer__title}>{title}</h3>

      <ul className={styles.footer__list}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
