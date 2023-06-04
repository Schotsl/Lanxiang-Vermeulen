import styles from "./page.module.scss";

import Image from "next/image";

export const metadata = {
  title: "Lxframes - Over mij",
};

export default function OverMij() {
  return (
    <>
      <section className={styles.over_mij}>
        <h1 className={styles.over_mij__title}>
          De vrouw achter deze portfolio
        </h1>
        <p className={styles.over_mij__content}>
          Mijn naam is Lanxiang, een eerstejaars Communicatie multimedia design
          student aan het HVA. Met een afgeronde opleiding in Mediavormgeving
          aan het Media College, ben ik gepassioneerd door de wereld van
          fotografie en vormgeving. Mijn doel is om visuele meesterwerken te
          creëren en mensen te inspireren met mijn unieke visie en talenten.
        </p>
        <button className={styles.over_mij__button}>Contact leggen</button>
      </section>

      <section className={styles.over_mij}>
        <h2>Mijn motto is Niet lullen maar poetsen</h2>
        <p>
          Mijn passie voor fotografie en vormgeving is grenzeloos. Ik vind het
          fascinerend om de wereld om me heen vast te leggen en visuele verhalen
          te vertellen. Of het nu gaat om het vangen van de essentie van een
          moment in een foto of het ontwerpen van aantrekkelijke en impactvolle
          grafische elementen, ik ben altijd op zoek naar manieren om mijn
          creatieve visie tot leven te brengen.
        </p>
        <p>
          Wat mij onderscheidt, is mijn toewijding en doorzettingsvermogen. Ik
          geloof sterk in het belang van hard werken en het continu streven naar
          verbetering. Ik ben niet bang om uitdagingen aan te gaan en ik ben
          vastbesloten om mijn vaardigheden en kennis voortdurend uit te
          breiden.
        </p>
        <p>
          Ik ben vastbesloten om mijn creatieve potentieel volledig te benutten
          en een blijvende indruk achter te laten met mijn werk. Ik geniet ervan
          om mensen te inspireren met mijn unieke visie en talenten. Ik geloof
          dat mijn inzet, samen met mijn passie voor fotografie en vormgeving,
          me zal helpen om opmerkelijke visuele creaties te produceren die
          mensen inspireren.
        </p>
        <p>
          Kortom, ik ben Lanxiang - een hardwerkende doorzetter met een grootte
          liefde voor fotografie en vormgeving. Ik kijk ernaar uit om in de
          toekomst nog mooier werk neer te zetten.
        </p>
      </section>
      <ul>
        <li>
          <Image
            alt="Lanxiang"
            width={535}
            height={847}
            src="/images/over-mij/88819AD1-CBB8-466A-9235-FAC9F242D8FC.png"
          />
          <Image
            alt="Lanxiang"
            width={535}
            height={847}
            src="/images/over-mij/DEC9DE1A-5284-4E0E-9F87-157F9422CBC0.png"
          />
          <Image
            alt="Lanxiang"
            width={535}
            height={847}
            src="/images/over-mij/9EE78C4F-4655-408C-9F91-01A5FF12463C.png"
          />
        </li>
      </ul>
    </>
  );
}
