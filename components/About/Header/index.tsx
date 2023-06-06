import Image from "next/image";
import Button from "@/components/Button";

import styles from "./AboutHeader.module.scss";

// TODO: This is a duplicate to ProjectHeader

export default function AboutHeader() {
  return (
    <section className={styles.header}>
      <div className={styles.header__sidebar}>
        <h1 className={styles.header__title}>De vrouw achter deze portfolio</h1>

        <div className={styles.header__divider}></div>

        <p className={styles.header__content}>
          Mijn naam is Lanxiang, een eerstejaars Communicatie multimedia design
          student aan het HVA. Met een afgeronde opleiding in Mediavormgeving
          aan het Media College, ben ik gepassioneerd door de wereld van
          fotografie en vormgeving. Mijn doel is om visuele meesterwerken te
          creëren en mensen te inspireren met mijn unieke visie en talenten.
        </p>

        <Button title="Contact leggen" href="mailto:info@lxframes.nl" />
      </div>

      <Image
        src="/images/over-mij/Lanxiang Vermeulen.png"
        alt="Lanxiang Vermeulen"
        width={1023}
        height={813}
        className={styles.header__image}
      />
    </section>
  );
}
