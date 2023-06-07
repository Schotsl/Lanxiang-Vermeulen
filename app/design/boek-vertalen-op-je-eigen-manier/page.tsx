import styles from "../page.module.scss";

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
          content="Ik kreeg de kans om in opdracht van Mediacollege Amsterdam een huisstijl te ontwerpen voor het Amsterdam Designmuseum. Het hele project werd in slechts vier weken afgerond, van 19 oktober tot 20 november 2020."
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
              Ontwerp een <b>introductie</b> en <b>huisstijl</b> voor het
              Amsterdam Designmuseum. Zorg ervoor dat de{" "}
              <b>huisstijl dynamisch</b> die <b>universeel toepasbaar</b> is op
              alle media-uitingen en introductiecampagne.
            </>
          }
        />

        <ProjectRow
          subtitle="Conceptontwikkeling"
          title="'T Hooge nest"
          sizing="width"
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
          content="Hieronder vind je een deel van mijn grondige onderzoek voor het Amsterdam Designmuseum project. Ik heb me toegewijd aan het verkennen van de doelgroep, concurrentie en het product. Daarnaast heb ik uitgebreid onderzoek gedaan naar bijpassende ontwerpers en disciplines."
          divider={true}
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
          title="Het verhaal"
          content="Hieronder vind je een deel van mijn grondige onderzoek voor het Amsterdam Designmuseum project. Ik heb me toegewijd aan het verkennen van de doelgroep, concurrentie en het product. Daarnaast heb ik uitgebreid onderzoek gedaan naar bijpassende ontwerpers en disciplines."
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
