import styles from "../page.module.scss";

import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

export const metadata = {
  title: "Lxframes - De kracht van Kruidenpower",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#18A660"
          title="De kracht van Kruidenpower"
          content="Ik kreeg de kans om in opdracht van mevrouw Nicole ten Geusendam-Trompetter een website te ontwerpen voor haar onderneming: Kruidenpower."
          image={{
            src: "/images/design/website-ontwerp/header.png",
            alt: "Website ontwerp",
            width: 4000,
            height: 6000,
          }}
        />

        <ProjectAssignment
          color="#F5FFED"
          border="#18A660"
          title="De power van kruiden"
          author="Lanxiang Vermeulen"
          content={
            <>
              Ik heb een <b>rustgevende website</b> ontworpen waarbij kruiden
              centraal staan. De website is ontworpen{" "}
              <b>met zachte kleuren, natuurlijke afbeeldingen</b> en een
              intuïtieve navigatie. Het bevat informatieve inhoud over kruiden
              en een gebruiksvriendelijke webshop met een responsive design.
            </>
          }
        />

        <ProjectGeneric
          color="#F5FFED"
          border="#18A660"
          divider={true}
          title="Uitwerking"
          content="Hieronder vind je de uitwerking van de websites, inclusief knoppen die direct naar haar portfolio en de Kruidenpower website leiden. Dit project is gerealiseerd in samenwerking met Sjors van Holst. Ik was verantwoordelijk voor de vormgeving, terwijl hij de website heeft geprogrammeerd."
          images={[
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/website-ontwerp/XD.png",
              size: "one-one",
              width: 2880,
              height: 1800,
            },
          ]}
          buttons={[
            <Button
              key="1"
              color="white"
              title="Portfolio"
              href="https://nicoletrompetter.nl"
            />,
            <Button
              key="2"
              color="white"
              title="Kruidenpower"
              href="https://kruidenpower.nl"
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
