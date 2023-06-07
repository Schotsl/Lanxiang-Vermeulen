import styles from "../page.module.scss";

import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectRow from "@/components/Project/Row";
import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

export const metadata = {
  title: "Lxframes - Boek vertalen op je eigen manier",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#F1D9D8"
          title="Boek vertalen op je eigen manier"
          content="Ik kreeg de kans om in opdracht van Mediacollege Amsterdam een eigen vertaling van een boek naar keuze uit te werken. Het hele project werd in slechts vier weken afgerond, van 15 mei tot 7 juni 2020."
          image={{
            src: "/images/design/boek-vertalen-op-je-eigen-manier/header.png",
            alt: "Boek vertalen op je eigen manier",
            width: 5184,
            height: 3456,
          }}
        />

        <ProjectAssignment
          color="#FFF9F9"
          border="#F1D9D8"
          content={
            <>
              Maak een herontwerp voor een boek naar keuze. Maak een visuele
              vertaling van het boek. Zorg ervoor dat de bladzijdes nog te lezen
              zijn en het boek op locatie tentoongesteld kunnen worden.
            </>
          }
        />

        <ProjectRow
          subtitle="Conceptontwikkeling"
          title="Verzets-tonen"
          sizing="width"
          content={
            <>
              <p>
                In het boek stuurt Eberhard (partner van Lientje) een geheim
                bericht via muziekbladen. Dit vond ik zo krachtig. Daarom wil ik
                de muziekbladen verwerken in het boek en hangend presenteren aan
                prikkeldraad. Ik ga een ruimte creëren dat klein, benauwd en
                oncomfortabel voelt. Maar ook een kracht en saamhorigheid opwekt
                door de muziek.
              </p>
            </>
          }
          image={{
            src: "/images/design/boek-vertalen-op-je-eigen-manier/1.png",
            alt: "'T Hooge nest",
            width: 1125,
            height: 2000,
          }}
        />

        <ProjectGeneric
          color="#FFF9F9"
          border="#F1D9D8"
          title="Het verhaal"
          content="Hieronder kan je het volledige verhaal en onderzoek bekijken van mijn vertaling van het boek: T’hooge nest. Via de knop die hieronder staat kan je mijn volledige onderzoek bekijken. "
          divider={true}
          buttons={[
            <Button
              key="1"
              color="white"
              href="/Boekenproject_procces.pdf"
              title="Bekijk het proces"
            />,
          ]}
          images={[
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/boek-vertalen-op-je-eigen-manier/2.png",
              size: "one-one",
              width: 1348,
              height: 1800,
            },
          ]}
        />

        <ProjectGeneric
          color="#FFF9F9"
          border="#F1D9D8"
          title="Uitwerking"
          content="Ik ben enorm trots op het eindresultaat van dit project. Het is me gelukt om het gevoel van het boek perfect over te brengen, en daarom heb ik dit project mogen afsluiten met een hele mooie 10. Naast het plezier dat ik had tijdens het maken ervan, realiseerde ik me ook hoe waardevol vrijheid eigenlijk is."
          divider={true}
          images={[
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/boek-vertalen-op-je-eigen-manier/3.png",
              size: "one-two",
              width: 3024,
              height: 4032,
            },
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/boek-vertalen-op-je-eigen-manier/4.png",
              size: "one-two",
              width: 1338,
              height: 1798,
            },
          ]}
        />

        <div className={styles.detail__socials}>
          <Socials />
        </div>
        <Footer />
      </main>
    </body>
  );
}
