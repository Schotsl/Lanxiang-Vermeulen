import styles from "./FooterList.module.scss";

import { Link } from "@/types";

type FooterListProps = {
  title: string;
  links: Link[];
};

export default function FooterList({ title, links }: FooterListProps) {
  return (
    <div className={styles.list}>
      <h3 className={styles.list__title}>{title}</h3>

      <ul className={styles.list__list}>
        {links.map((link, index) => (
          <li className={styles.list__item} key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
