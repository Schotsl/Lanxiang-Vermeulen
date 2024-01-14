import Image from "next/image";
import Button from "@/components/Button";

import styles from "./AboutHeader.module.scss";

import imageLanxiang from "@/public/images/over-mij/header.png";

// TODO: This is a duplicate to ProjectHeader

export default function AboutHeader() {
  return (
    <section className={styles.header}>
      <div className={styles.header__sidebar}>
        <h1 className={styles.header__title}>De vrouw achter deze portfolio</h1>

        <div className={styles.header__divider}></div>

        <p className={styles.header__content}>
          Mijn naam is Lanxiang, een student Communicatie multimedia design aan
          het HVA. Met een afgeronde opleiding in Mediavormgeving aan het Media
          College, ben ik enthousiast over de wereld van fotografie en
          vormgeving. Mijn doel is om inspirerende visuele werken te creëren en
          mensen te inspireren met mijn visie en vaardigheden.
        </p>

        <Button title="Contact leggen" href="/contact" />
      </div>

      <Image
        src={imageLanxiang}
        alt="Lanxiang Vermeulen"
        className={styles.header__image}
        placeholder="blur"
      />
    </section>
  );
}
