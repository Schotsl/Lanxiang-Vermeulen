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
          content="Ik kreeg de kans om in opdracht van Hoge school van Amsterdam content te schrijven en ontwerpen voor een fictief bedrijf. Het hele project werd in zeven weken afgerond, van 14 november tot 6 december 2022."
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
              Als team van maximaal 3 studenten bedenken jullie samen een
              bedrijf. Het bedrijf moet minimaal twee dingen
              &apos;verkopen&apos;: zichzelf en een dienst of product. Kies een
              onderwerp, product of dienst waar jullie affiniteit mee hebben.
              Jullie vormen een kleine onderneming, zzp&apos;er of start-up.
              Jullie doel is om content te ontwerpen voor de website van jullie
              bedrijf, waarbij deze aansluit bij de bedrijfsdoelen, de
              gebruikers (doelgroep), de gebruikersdoelen en de
              gebruikersvragen.
            </>
          }
        />

        <ProjectRow
          subtitle="Conceptontwikkeling"
          sizing="width"
          title="ClubSafe"
          content={
            <>
              <p>
                ClubSafe is een door ons bedachte organisatie die zich richt op
                het verbeteren van de veiligheid van uitgaande jongeren. Als
                Non-Profit Organisatie ontvangen we financiering van het
                Ministerie van Volksgezondheid, Welzijn en Sport, en werken we
                nauw samen met tal van vrijwilligers.
              </p>
              <p>
                <b>Wat Clubsafe doet</b>: ClubSafe biedt guides die de gebruiker
                kan voorbereiden op elke situatie! Voor de eerste keer of voor
                de honderdste. Ook kan je Clubs uitzoeken die wij hebben
                onderzocht en beoordeeld op verschillende onderwerpen zoals
                veiligheid en toegankelijkheid! Voorlichtingen worden vooral op
                hogescholen gegeven en komen in alle vormen en maten. Samen met
                ons team word er gekeken naar hoe deze zo persoonlijk en uniek
                mogelijk kunnen maken
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
          title="Uitwerking"
          content="De vormgeving van ClubSafe straalt vrolijkheid uit en creëert een sfeer alsof je je in de club bevindt. Het ontwerp is uitnodigend en de tone of voice is vriendelijk. Ons doel is om mensen voor te bereiden op mogelijke situaties tijdens het uitgaan, zonder ze af te schrikken. We willen benadrukken dat uitgaan leuk is! ClubSafe zet zich in om jonge feestgangers op een veilige manier een geweldige ervaring te bieden."
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
            <Button key="1" color="white" href="/" title="XD-bestand" />,
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
