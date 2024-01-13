import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectRow from "@/components/Project/Row";
import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

export const metadata = {
  title: "Lxframes - Stem tegen Fast Fashion",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#18A660"
          title="Stem tegen Fast Fashion"
          content="Ik kreeg de kans om in opdracht van Mediacollege Amsterdam een huisstijl te ontwerpen voor een protestbeweging naar keuze. Het hele project werd in slechts vier weken afgerond, van 15 September tot 31 Oktober 2020."
          image={{
            src: "/images/design/stem-tegen-fast-fashion/header.png",
            alt: "Stem tegen Fast Fashion",
            width: 1717,
            height: 1292,
          }}
        />

        <ProjectAssignment
          color="#F5FFED"
          border="#18A660"
          title="Branding voor jouw protest"
          author="Mediacollege Amsterdam"
          quote={
            <>
              Ontwerp een <b>huisstijl</b> voor een{" "}
              <b>beweging naar jouw keuze</b>. Deze beweging kan gerelateerd
              zijn aan milieuactivisme, liefdadigheid, cultuur of een ander
              onderwerp waar je gepassioneerd over bent. Het doel van deze
              opdracht is om jouw creatieve vaardigheden te laten zien en een
              visuele identiteit te creëren.
            </>
          }
        />

        <ProjectRow
          sizing="width"
          title="Welkom in de klerezooi"
          content={
            <>
              <p>
                Als model ben ik sterk betrokken bij de kledingindustrie en zie
                ik hoezeer deze industrie de wereld beïnvloedt. Daarom heb ik
                besloten om een ontwerp te maken voor de slow fashion beweging.
              </p>
              <p>
                De fast fashion industrie maakt er serieus een rommeltje van, en
                op dit moment is de uitspraak “Welkom in de klerezooi!” echt van
                toepassing. Met mijn ontwerp wil ik mensen bewust maken en een
                positieve verandering teweegbrengen. Het is belangrijk dat de
                huisstijl de belangrijkste waarden van de slow fashion beweging
                weerspiegelt, zoals duurzaamheid, ethiek, eerlijke
                werkomstandigheden en bewust consumeren.
              </p>
            </>
          }
          image={{
            src: "/images/design/stem-tegen-fast-fashion/Logo.png",
            alt: "Huisstijlsysteem",
            width: 1126,
            height: 1000,
          }}
        />

        <ProjectGeneric
          color="#F5FFED"
          border="#18A660"
          sizing="width"
          divider={true}
          title="Logo uitleg"
          content={
            <>
              <p>
                De mode-industrie heeft grote invloed op het klimaat, dieren,
                mensen en het milieu. Om dit te benadrukken, heb ik ervoor
                gekozen om deze vier aspecten te verwerken in mijn logo: een
                knoopje met vier gaten, elk verwijzend naar één van deze
                sectoren.Het knoopje symboliseert kinderarbeid, een schrijnend
                probleem in de kledingindustrie. Het herinnert ons aan de
                ernstige omstandigheden waarin kinderen gedwongen worden te
                werken voor goedkope kleding. De vier gaten in het knoopje
                vertegenwoordigen specifiek de impact van de fast fashion
                industrie op het klimaat, dieren, mensen en het milieu.
              </p>
            </>
          }
          images={[
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/stem-tegen-fast-fashion/Icons.png",
              size: "one-one",
              width: 4000,
              height: 996,
            },
          ]}
        />

        <ProjectGeneric
          color="#F5FFED"
          border="#18A660"
          title="Uitwerking"
          content="Hieronder zie je de vier posters die aankondigen dat er een protest op komst is."
          divider={true}
          images={[
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/stem-tegen-fast-fashion/1.png",
              size: "one-two",
              width: 1258,
              height: 1794,
            },
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/stem-tegen-fast-fashion/2.png",
              size: "one-two",
              width: 1258,
              height: 1794,
            },
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/stem-tegen-fast-fashion/3.png",
              size: "one-two",
              width: 1258,
              height: 1794,
            },
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/stem-tegen-fast-fashion/4.png",
              size: "one-two",
              width: 1258,
              height: 1794,
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
