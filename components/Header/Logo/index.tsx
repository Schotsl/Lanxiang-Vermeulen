import Image from "next/image";

import styles from "./HeaderLogo.module.scss";

import imageLogo from "@/public/images/logo.png";

export default function HeaderLogo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logo__link} href="/">
        <Image
          alt="Lxframes logo"
          src={imageLogo}
          className={styles.logo__image}
          placeholder="blur"
        />
      </a>
    </div>
  );
}
