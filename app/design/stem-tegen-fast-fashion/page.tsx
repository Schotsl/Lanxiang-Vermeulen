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
          content="Ik kreeg de kans om in opdracht van Mediacollege Amsterdam een huisstijl te ontwerpen voor een beweging naar keuze. Het hele project werd in slechts vier weken afgerond, van 15 September tot 31 Oktober 2020."
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
          content={
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
          subtitle="Conceptontwikkeling"
          title="Welkom in de klerezooi"
          content={
            <>
              <p>
                Als model ben ik diep betrokken bij de kledingindustrie, en
                daarom heb ik ervoor gekozen om een huisstijl te ontwerpen voor
                de slow fashion beweging. Ik zie de schrijnende impact die deze
                industrie heeft op verschillende aspecten van onze wereld. De
                fast fashion industrie maakt er werkelijk een puinhoop van, en
                op dit moment is de kreet “Welkom in de klerezooi!” meer dan
                toepasselijk.
              </p>
              <p>
                Met mijn huisstijlontwerp wil ik bewustwording creëren en een
                positieve verandering in gang zetten. Het is essentieel dat de
                huisstijl de kernwaarden van de slow fashion beweging
                weerspiegelt, zoals duurzaamheid, ethiek, eerlijke
                arbeidsomstandigheden en bewuste consumptie.
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
          title="De toekomst is baanbrekend"
          content={
            <>
              <p>
                De fase fashion industrie heeft veel impact op het klimaat,
                dieren, mensen en het milieu. Om deze problematiek te
                benadrukken, heb ik ervoor gekozen om deze vier aspecten te
                verwerken in mijn logo. Mijn logo bestaat uit een knoopje met
                vier gaten, die elk verwijzen naar een van deze sectoren.
              </p>
              <p>
                Het knoopje dient als symbool voor kinderarbeid, een schrijnend
                probleem dat nog steeds voorkomt in de kledingindustrie. Het
                herinnert ons aan de ernstige omstandigheden waarin kinderen
                gedwongen worden te werken voor de productie van goedkope
                kleding.
              </p>
              <p>
                De vier gaten in het knoopje vertegenwoordigen specifiek het
                klimaat, dieren, mensen en het milieu. Elk gat staat symbool
                voor de negatieve impact die de fast fashion industrie heeft op
                deze gebieden.
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
