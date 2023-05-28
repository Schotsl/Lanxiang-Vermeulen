"use client";

import styles from "./Socials.module.scss";

import { FaInstagram, FaLinkedin, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Socials() {
  return (
    <section className={styles.socials}>
      <h3 className={styles.title}>Socials | @lanxiangvermeulen</h3>

      <ul className={styles.list}>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="https://www.instagram.com/lanxiangvermeulen/"
          >
            <FaInstagram className={styles.icon} />
            <span className={styles.label}>Instagram</span>
          </a>
          <a className={styles.link}>
            <FaLinkedin className={styles.icon} />
            <span className={styles.label}>LinkedIn</span>
          </a>
          <a className={styles.link}>
            <FaTiktok className={styles.icon} />
            <span className={styles.label}>TikTok</span>
          </a>
          <a className={styles.link}>
            <FaFacebook className={styles.icon} />
            <span className={styles.label}>Facebook</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
