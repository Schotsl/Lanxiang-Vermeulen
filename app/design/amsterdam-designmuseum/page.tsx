import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectRow from "@/components/Project/Row";
import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

export const metadata = {
  title: "Lxframes - Amsterdam Designmuseum",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#EFD265"
          title="Amsterdam Designmuseum"
          content="Ik kreeg de kans om in opdracht van Mediacollege Amsterdam een huisstijl te ontwerpen voor het Amsterdam Designmuseum. Het hele project werd in slechts vier weken afgerond, van 19 oktober tot 20 november 2020."
          image={{
            src: "/images/design/amsterdam-designmuseum/header.png",
            alt: "Amsterdam Designmuseum",
            width: 4000,
            height: 2500,
          }}
        />

        <ProjectAssignment
          color="#FFFEF7"
          border="#EFD265"
          content={
            <>
              Ontwerp een <b>introductie</b> en <b>huisstijl</b> voor het
              Amsterdam Designmuseum. Zorg ervoor dat de{" "}
              <b>huisstijl dynamisch</b> die <b>universeel toepasbaar</b> is op
              alle media-uitingen en introductiecampagne.
            </>
          }
        />

        <ProjectRow
          subtitle="Conceptontwikkeling"
          title="De toekomst is baanbrekend"
          content={
            <>
              <p>
                Mijn concept draagt de naam “De toekomst is baanbrekend” en is
                erg uniek! Met mijn ontwerp wil ik laten zien dat het museum
                boordevol nieuwe ideeën en inzichten zit. Het is een plek waar
                je jezelf kunt ontdekken en volop inspiratie kunt opdoen.
              </p>
              <p>
                Wat mijn huisstijl zo spannend maakt, is het blokkensysteem.
                Stel je voor: elke keer dat je de blokken op een andere manier
                stapelt, krijg je een compleet nieuw perspectief. Het is alsof
                je telkens weer een frisse blik werpt op de wereld om je heen.
                Het dynamische karakter van mijn ontwerp zal je zeker verrassen
                en uitdagen om de dingen op een andere manier te bekijken.
              </p>
              <p>
                Ontdek de grenzeloze mogelijkheden en laat je inspireren om de
                toekomst op een baanbrekende manier tegemoet te komen
              </p>
            </>
          }
          image={{
            src: "/images/design/amsterdam-designmuseum/Huisstijlsysteem.png",
            alt: "Huisstijlsysteem",
            width: 498,
            height: 776,
          }}
        />

        <ProjectGeneric
          color="#FFFEF7"
          border="#EFD265"
          divider={true}
          title="Uitwerking"
          content="Hieronder vind je een deel van mijn grondige onderzoek voor het Amsterdam Designmuseum project. Ik heb me toegewijd aan het verkennen van de doelgroep, concurrentie en het product. Daarnaast heb ik uitgebreid onderzoek gedaan naar bijpassende ontwerpers en disciplines."
          images={[
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/amsterdam-designmuseum/1.png",
              size: "one-one",
              width: 1695,
              height: 1048,
            },
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/amsterdam-designmuseum/2.png",
              size: "one-one",
              width: 1258,
              height: 856,
            },
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/amsterdam-designmuseum/3.png",
              size: "one-one",
              width: 1342,
              height: 800,
            },
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/amsterdam-designmuseum/4.png",
              size: "one-one",
              width: 1318,
              height: 800,
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
