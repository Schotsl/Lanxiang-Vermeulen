"use client";

import Image from "next/image";

import styles from "./HeaderLogo.module.scss";

export default function HeaderLogo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logo__link} href="index.html">
        <Image
          src="/images/logo.png"
          alt="Lxframes logo"
          width={408}
          height={162}
          className={styles.logo__image}
        />
      </a>
    </div>
  );
}
