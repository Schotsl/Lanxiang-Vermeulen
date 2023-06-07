import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectRow from "@/components/Project/Row";
import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

export const metadata = {
  title: "Lxframes - Restaurant website",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#8A612B"
          title="Restaurant website"
          content="Ik kreeg de kans om in opdracht van Hoge school van Amsterdam een website te ontwerpen voor een fictief restaurant. Het hele project werd in zeven weken afgerond, van 14 november tot 6 december 2022."
          image={{
            src: "/images/design/restaurant-website/header.png",
            alt: "Restaurant website",
            width: 3199,
            height: 2262,
          }}
        />

        <ProjectAssignment
          color="#FFECD5"
          border="#8A612B"
          content={
            <>
              Maak een <b>single page</b> website voor een <b>restaurant</b>. De
              single page bestaat uitsluitend uit <b>vorm, kleur en tekst</b>,
              dus geen afbeeldingen. De stijl van een{" "}
              <b>Nederlandse vormgever</b> is het uitgangspunt voor de
              vormgeving. De vormgever is al voor je gekozen!
            </>
          }
        />

        <ProjectRow
          sizing="width"
          subtitle="Conceptontwikkeling"
          title="Lan'x restaurant"
          content={
            <>
              <p>
                Ik kreeg de opdracht toegewezen om te werken met de kunstenaar
                Anthon Beeke. Anthon Beeke onderscheidt zich van andere
                kunstenaars door zijn unieke stijl. Hij houdt zich niet aan
                conventionele regels, en dit is duidelijk zichtbaar in zijn
                werk. Zijn creaties zijn vaak intens, maar hebben altijd een
                ethische ondertoon. Ik heb deze kenmerken toegepast in mijn
                website ontwerp.
              </p>
            </>
          }
          image={{
            src: "/images/design/restaurant-website/Inspiration.png",
            alt: "Inspiratie",
            width: 1938,
            height: 1370,
          }}
        />

        <ProjectGeneric
          color="#FFECD5"
          border="#8A612B"
          title="Het proces"
          content="Het proces was bijzonder plezierig en leerzaam. Ik heb veel geëxperimenteerd met diverse ontwerptechnieken. Zo heb ik me laten inspireren door karton en verschillende soorten papier, waarbij ik speelsheid in mijn ontwerpen heb gebracht."
          divider={true}
          images={[
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/restaurant-website/Process.png",
              size: "one-one",
              width: 2528,
              height: 1794,
            },
          ]}
        />

        <ProjectGeneric
          sizing="width"
          color="#FFECD5"
          border="#8A612B"
          title="Uitwerking"
          content="Ik ben enorm trots op het resultaat van mijn werk. De speelsheid van de plaatsing van de elementen is duidelijk zichtbaar en geeft een levendig karakter aan het ontwerp. De stijl is sterk geïnspireerd door de designposters die Anthon Beeke heeft gemaakt, waardoor er een harmonieus samenspel ontstaat tussen zijn artistieke invloeden en mijn eigen creativiteit."
          divider={true}
          images={[
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/restaurant-website/Design - 1.png",
              size: "one-two",
              width: 766,
              height: 1440,
            },
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/restaurant-website/Design - 2.png",
              size: "one-two",
              width: 766,
              height: 1440,
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
