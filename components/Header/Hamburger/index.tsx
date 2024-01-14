import styles from "./HeaderHamburger.module.scss";

export default function HeaderHamburger() {
  return (
    <button
      className={styles.hamburger}
      aria-label="Menu"
      aria-controls="nav-links"
      aria-expanded="false"
    >
      <span className={styles.hamburger__line}></span>
      <span className={styles.hamburger__line}></span>
      <span className={styles.hamburger__line}></span>
    </button>
  );
}
