import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import Button from "@/components/Button";

import ProjectRow from "@/components/Project/Row";
import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

export const metadata = {
  title: "Lxframes - Content ontwerpen en schrijven",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#F1D9D8"
          title="Content ontwerpen en schrijven"
          content="Ik kreeg de kans om in opdracht van Mediacollege Amsterdam een huisstijl te ontwerpen voor het Amsterdam Designmuseum. Het hele project werd in slechts vier weken afgerond, van 19 oktober tot 20 november 2020."
          image={{
            src: "/images/design/content-ontwerpen-en-schrijven/header.png",
            alt: "Content ontwerpen en schrijven",
            width: 5000,
            height: 3000,
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
          sizing="width"
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
            src: "/images/design/content-ontwerpen-en-schrijven/Landing.png",
            alt: "Huisstijlsysteem",
            width: 1982,
            height: 1114,
          }}
        />

        <ProjectGeneric
          color="#FFF9F9"
          border="#F1D9D8"
          divider={true}
          title="De toekomst is baanbrekend"
          content="Mijn concept draagt de naam “De toekomst is baanbrekend” en is erg uniek! Met mijn ontwerp wil ik laten zien dat het museum boordevol nieuwe ideeën en inzichten zit. Het is een plek waar je jezelf kunt ontdekken en volop inspiratie kunt opdoen."
          images={[
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/content-ontwerpen-en-schrijven/XD.png",
              size: "one-one",
              width: 2880,
              height: 1800,
            },
          ]}
          buttons={[
            <Button key="1" color="white" href="/test" title="XD-bestand" />,
            <Button
              key="2"
              color="white"
              href="/test"
              title="Clufsafe uitgelegd"
            />,
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
