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
          color="#F1D9D8"
          title="Restaurant website"
          content="Ik kreeg de kans om in opdracht van Mediacollege Amsterdam een huisstijl te ontwerpen voor het Amsterdam Designmuseum. Het hele project werd in slechts vier weken afgerond, van 19 oktober tot 20 november 2020."
          image={{
            src: "/images/design/restaurant-website/header.png",
            alt: "Restaurant website",
            width: 3199,
            height: 2262,
          }}
        />

        <ProjectAssignment
          color="#FFF9F9"
          border="#F1D9D8"
          content={
            <>
              Ontwerp een <b>introductie</b> en <b>huisstijl</b> voor het
              Amsterdam Designmuseum. Zorg ervoor dat de <b>huisstijl</b>{" "}
              <b>dynamisch</b> die <b>universeel toepasbaar</b> is op alle
              media-uitingen en introductiecampagne.
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
            src: "/images/design/restaurant-website/Inspiration.png",
            alt: "Inspiratie",
            width: 1938,
            height: 1370,
          }}
        />

        <ProjectGeneric
          color="#FFF9F9"
          border="#F1D9D8"
          title="Uitwerking"
          content="Hieronder vind je een deel van mijn grondige onderzoek voor het Amsterdam Designmuseum project. Ik heb me toegewijd aan het verkennen van de doelgroep, concurrentie en het product. Daarnaast heb ik uitgebreid onderzoek gedaan naar bijpassende ontwerpers en disciplines."
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
          color="#FFF9F9"
          border="#F1D9D8"
          title="Uitwerking"
          content="Hieronder vind je een deel van mijn grondige onderzoek voor het Amsterdam Designmuseum project. Ik heb me toegewijd aan het verkennen van de doelgroep, concurrentie en het product. Daarnaast heb ik uitgebreid onderzoek gedaan naar bijpassende ontwerpers en disciplines."
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
