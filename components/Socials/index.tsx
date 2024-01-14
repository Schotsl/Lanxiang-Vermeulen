import styles from "./Socials.module.scss";

import { FaInstagram, FaLinkedin, FaTiktok, FaFacebook } from "react-icons/fa";

type SocialsProps = {
  minimized?: boolean;
};

export default function Socials({ minimized = false }: SocialsProps) {
  return (
    <section
      className={styles.socials}
      style={{
        padding: minimized ? "0rem" : "6rem",
        alignItems: minimized ? "flex-start" : "center",
      }}
    >
      {!minimized && (
        <h3 className={styles.socials__title}>
          <span className={styles.socials__subtitle}>Socials</span> |
          @lanxiangvermeulen
        </h3>
      )}

      <ul className={styles.socials__list}>
        <li className={styles.socials__item}>
          <a
            className={styles.socials__link}
            href="https://www.instagram.com/lanxiangvermeulen/"
          >
            <FaInstagram className={styles.socials__icon} />
            <span className={styles.socials__label}>Instagram</span>
          </a>
        </li>

        <li className={styles.socials__item}>
          <a
            className={styles.socials__link}
            href="https://www.linkedin.com/in/lanxiang-vermeulen-498471185/"
          >
            <FaLinkedin className={styles.socials__icon} />
            <span className={styles.socials__label}>LinkedIn</span>
          </a>
        </li>

        <li className={styles.socials__item}>
          <a
            className={styles.socials__link}
            href="https://www.tiktok.com/@lanxiangvermeulen/"
          >
            <FaTiktok className={styles.socials__icon} />
            <span className={styles.socials__label}>TikTok</span>
          </a>
        </li>

        <li className={styles.socials__item}>
          <a
            className={styles.socials__link}
            href="https://www.facebook.com/lanxiang.vermeulen/"
          >
            <FaFacebook className={styles.socials__icon} />
            <span className={styles.socials__label}>Facebook</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
