import styles from "./AboutDescription.module.scss";

export default function AboutDescription() {
  return (
    <section className={styles.over_mij}>
      <h2 className={styles.over_mij__title}>
        Mijn motto is{" "}
        <p className={styles.over_mij__quote}>Niet lullen maar poetsen</p>
      </h2>
      <p>
        Mijn passie voor fotografie en vormgeving is eindeloos. Ik heb een
        passie voor het vastleggen van de wereld om me heen en het vertellen van
        visuele verhalen. Of het nu gaat om het vangen van het perfecte moment
        in een foto of het maken van grafische elementen, ik ben altijd op zoek
        naar manieren om mijn creativiteit tot leven te brengen.
      </p>
    </section>
  );
}
