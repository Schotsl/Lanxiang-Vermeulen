import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Socials from "@/components/Socials";

import ProjectRow from "@/components/Project/Row";
import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

import imageHeader from "@/public/images/design/het-passieproject/header.png";
import imagePoster from "@/public/images/design/het-passieproject/Poster.png";
import imageFirst from "@/public/images/design/het-passieproject/1.png";
import imageSecond from "@/public/images/design/het-passieproject/2.png";
import imageThird from "@/public/images/design/het-passieproject/3.png";
import imageFourth from "@/public/images/design/het-passieproject/4.png";
import imageFifth from "@/public/images/design/het-passieproject/5.png";

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
          image={imageHeader}
          title="Het passieproject"
          content="Ik kreeg de kans om in opdracht van de Hogeschool van Amsterdam een passie tot leven te brengen. Het hele project werd in slechts drie weken afgerond, van 31 maart tot 19 april 2022."
        />

        <ProjectAssignment
          title="Wat is jouw passie?"
          color="#FFF5E8"
          border="#774F40"
          author="Hogeschool van Amsterdam"
          quote={
            <>
              <b>Van je passie je werk maken</b>, dat willen we misschien wel
              allemaal. Maar wat betekent het woord &apos;Passie&apos; eigenlijk
              en hoe weet je wat jouw passie is? Bij het Passieproject staan we
              uitgebreid stil bij het begrip &apos;Passie&apos; en gaan we in
              een drietal weken samen <b>op zoek naar jouw passie(s).</b>
            </>
          }
        />

        <ProjectRow
          title="Expositie mensen verhalen"
          image={imagePoster}
          content={
            <>
              <p>
                Voor ons passie-project hebben we de favoriete boeken van lezers
                tot leven gebracht in levendige ruimtes. Deze ruimtes brengen de
                verhalen tot leven en nemen je mee naar betoverende
                boekenwerelden. Om een breed publiek aan te spreken, hebben we 5
                individuen uitgekozen die zich in verschillende
                leeftijdscategorieën bevinden, variërend van 10 jaar tot 91
                jaar.
              </p>
              <p>
                Ben je benieuwd naar ons denkproces? Hieronder vind je onze
                volledige onderzoeksresultaten en waarnemingen.
              </p>
              <Button
                href="#de-expositie"
                color="white"
                title="Mensen verhalen"
                style={{
                  alignSelf: "flex-start",
                  marginTop: "1rem",
                }}
              />
              ,
            </>
          }
        />

        <ProjectGeneric
          color="#FFF9F9"
          border="#774F40"
          title="Uitwerking"
          content={
            <>
              Ik was verantwoordelijk voor de fotos en interviews voor de
              expositie. Met plezier heb ik mijn passie, fotografie, kunnen
              uitoefenen. Hieronder zie je de vijf foto&apos;s die
              tentoongesteld zijn in de expositie.
            </>
          }
          divider={true}
          images={[
            {
              size: "one-two",
              image: imageFirst,
            },
            {
              size: "one-two",
              image: imageSecond,
            },
            {
              size: "one-one",
              image: imageThird,
            },
            {
              size: "one-two",
              image: imageFourth,
            },
            {
              size: "one-two",
              image: imageFifth,
            },
          ]}
        />

        <ProjectGeneric
          id="de-expositie"
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
