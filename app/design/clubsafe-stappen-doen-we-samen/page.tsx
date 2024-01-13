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
  title: "Lxframes - Clubsafe: Stappen doen we samen!",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#F1D9D8"
          title="Clubsafe: Stappen doen we samen!"
          content="Ik kreeg de kans om in opdracht van de Hogeschool van Amsterdam content te schrijven en ontwerpen voor een fictief bedrijf. Het hele project werd in zeven weken afgerond, van 14 november tot 6 december 2022."
          image={{
            src: "/images/design/clubsafe-stappen-doen-we-samen/header.png",
            alt: "Content ontwerpen en schrijven",
            width: 5000,
            height: 3000,
          }}
        />

        <ProjectAssignment
          color="#FFF9F9"
          title="Start je eigen bedrijf!"
          border="#F1D9D8"
          author="Hogeschool van Amsterdam"
          quote={
            <>
              Als team van maximaal 3 studenten bedenken jullie samen een
              bedrijf. Het bedrijf moet minimaal twee dingen
              &apos;verkopen&apos;: zichzelf en een dienst of product.
            </>
          }
        />

        <ProjectRow
          sizing="width"
          title="Ons bedrijf: Clubsafe"
          content={
            <>
              <p>
                ClubSafe is een door ons (Lanxiang Vermeulen & LuaTelgt)
                bedachte organisatie die zich richt op het verbeteren van de
                veiligheid van uitgaande jongeren. ClubSafe biedt guides die de
                gebruiker kan voorbereiden op elke situatie! Voor de eerste keer
                of voor de honderdste.
              </p>
              <p>
                Wil je meer weten over Clubsafe en het verhaal achter ons
                (fictieve) bedrijf? Klik dan op de knop hieronder!
              </p>
            </>
          }
          image={{
            src: "/images/design/clubsafe-stappen-doen-we-samen/Landing.png",
            alt: "Huisstijlsysteem",
            width: 1982,
            height: 1114,
          }}
        />

        <ProjectGeneric
          color="#FFF9F9"
          border="#F1D9D8"
          divider={true}
          title="Uitwerking"
          content="De vormgeving van ClubSafe straalt vrolijkheid uit en creëert een sfeer alsof je je in de club bevindt. Het ontwerp is uitnodigend en de tone of voice is vriendelijk. Ons doel is om mensen voor te bereiden op mogelijke situaties tijdens het uitgaan, zonder ze af te schrikken. We willen benadrukken dat uitgaan leuk is! ClubSafe zet zich in om jonge feestgangers op een veilige manier een geweldige ervaring te bieden."
          images={[
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/clubsafe-stappen-doen-we-samen/XD.png",
              size: "one-one",
              width: 2880,
              height: 1800,
            },
          ]}
          buttons={[
            <Button
              key="1"
              color="white"
              href="/Content ClubSafe.xd"
              title="XD-bestand"
            />,
            <Button
              key="2"
              color="white"
              href="/Club Safe Detail.pdf"
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
