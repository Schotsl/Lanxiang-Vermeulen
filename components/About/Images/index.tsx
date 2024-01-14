import Image from "next/image";
import styles from "./AboutImages.module.scss";

import imageFirst from "@/public/images/over-mij/88819AD1-CBB8-466A-9235-FAC9F242D8FC.png";
import imageSecond from "@/public/images/over-mij/DEC9DE1A-5284-4E0E-9F87-157F9422CBC0.png";
import imageThird from "@/public/images/over-mij/9EE78C4F-4655-408C-9F91-01A5FF12463C.png";

export default function AboutImages() {
  return (
    <ul className={styles.images}>
      <li className={styles.images__item}>
        <Image
          alt="Lanxiang"
          src={imageFirst}
          className={styles.images__image}
          placeholder="blur"
        />
      </li>
      <li className={styles.images__item}>
        <Image
          alt="Lanxiang"
          src={imageSecond}
          className={styles.images__image}
          placeholder="blur"
        />
      </li>
      <li className={styles.images__item}>
        <Image
          alt="Lanxiang"
          src={imageThird}
          className={styles.images__image}
          placeholder="blur"
        />
      </li>
    </ul>
  );
}
