import Image from "next/image";
import styles from "./AboutImages.module.scss";

export default function AboutImages() {
  return (
    <ul className={styles.images}>
      <li className={styles.images__item}>
        <Image
          alt="Lanxiang"
          width={535}
          height={847}
          src="/images/over-mij/88819AD1-CBB8-466A-9235-FAC9F242D8FC.png"
          className={styles.images__image}
        />
      </li>
      <li className={styles.images__item}>
        <Image
          alt="Lanxiang"
          width={535}
          height={847}
          src="/images/over-mij/DEC9DE1A-5284-4E0E-9F87-157F9422CBC0.png"
          className={styles.images__image}
        />
      </li>
      <li className={styles.images__item}>
        <Image
          alt="Lanxiang"
          width={535}
          height={847}
          src="/images/over-mij/9EE78C4F-4655-408C-9F91-01A5FF12463C.png"
          className={styles.images__image}
        />
      </li>
    </ul>
  );
}
