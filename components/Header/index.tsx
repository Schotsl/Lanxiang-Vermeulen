"use client";

import styles from "./Header.module.scss";

import HeaderLogo from "@/components/Header/Logo";
import HeaderLinks from "@/components/Header/Links";
import HeaderHamburger from "@/components/Header/Hamburger";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__navigation} role="navigation">
        <HeaderHamburger />
        <HeaderLogo />
        <HeaderLinks />
      </nav>
    </header>
  );
}
