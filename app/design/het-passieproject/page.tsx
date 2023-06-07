import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectRow from "@/components/Project/Row";
import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

export const metadata = {
  title: "Lxframes - Het passieproject",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#774F40"
          title="Het passieproject"
          content="Ik kreeg de kans om in opdracht van Hoge school van Amsterdam om een passie tot leven te brengen. Het hele project werd in slechts drie weken afgerond, van 31 maart tot 19 april 2020."
          image={{
            src: "/images/design/het-passieproject/header.png",
            alt: "Het passieproject",
            width: 4162,
            height: 2770,
          }}
        />

        <ProjectAssignment
          color="#FFF5E8"
          border="#774F40"
          content={
            <>
              Van je <b>passie je werk maken</b>, dat willen we misschien wel
              allemaal. Maar wat betekent het woord &apos;Passie&apos; eigenlijk
              en hoe weet je wat jouw passie is? Bij het Passieproject staan we
              uitgebreid stil bij het begrip &apos;Passie&apos; en gaan we in
              een drietal weken <b>samen op zoek naar jouw passie(s)</b>.
            </>
          }
        />

        <ProjectRow
          title="Expositie mensen verhalen"
          subtitle="Conceptontwikkeling"
          content={
            <>
              <p>
                In samenwerking met de Hogeschool van Amsterdam hebben we de
                favoriete boeken van lezers omgezet in levendige ruimtes. Deze
                ruimtes brengen de verhalen tot leven en nemen je mee naar de
                betoverende werelden van de boeken.
              </p>
              <p>
                Met passie creëren wij een betoverende expositie waar boeken
                mensen verbinden. Op straat interviewen wij vol enthousiasme
                mensen over zichzelf en hun favoriete boeken. Groep B ontstaat,
                een diverse en inclusieve groep waar we trots op zijn. Daarnaast
                selecteren we vijf bijzondere individuen uit verschillende
                leeftijdsgroepen voor Groep A. Elk krijgt een eigen hoekje in de
                expositie, waar hun verhaal en boek stralen. Met zorg en
                creativiteit vormgegeven, zorgen deze hoekjes voor een unieke
                ervaring. Bezoekers worden meegenomen op een inspirerende reis
                langs de diverse hoekjes die ieder een eigen verhaal vertellen.
              </p>
            </>
          }
          image={{
            src: "/images/design/het-passieproject/Poster.png",
            alt: "Poster",
            width: 1258,
            height: 1790,
          }}
        />

        <ProjectGeneric
          color="#FFF9F9"
          border="#774F40"
          title="Uitwerking"
          content="Als verantwoordelijke voor de fotografie en interviews voor de expositie, heb ik met veel plezier mijn passie voor fotografie kunnen uiten. Hieronder zie je de vijf foto’s die in de expositie te zien zijn verschenen."
          divider={true}
          images={[
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/het-passieproject/1.png",
              size: "one-two",
              width: 1366,
              height: 2048,
            },
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/het-passieproject/2.png",
              size: "one-two",
              width: 1537,
              height: 2305,
            },
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/het-passieproject/3.png",
              size: "one-one",
              width: 2305,
              height: 1537,
            },
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/het-passieproject/4.png",
              size: "one-two",
              width: 3456,
              height: 5184,
            },
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/het-passieproject/5.png",
              size: "one-two",
              width: 5184,
              height: 3456,
            },
          ]}
        />

        <ProjectGeneric
          color="#FFF9F9"
          border="#774F40"
          title="De expositie"
          content="Hieronder kun je onze video bekijken van de volledige expositie. We zijn verheugd te kunnen mededelen dat dit project met succes is afgerond en dat we een 10 hebben behaald!"
          divider={true}
        />

        <div className={styles.detail__socials}>
          <Socials />
        </div>
        <Footer />
      </main>
    </body>
  );
}
