import styles from "../page.module.scss";

import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectRow from "@/components/Project/Row";
import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

export const metadata = {
  title: "Lxframes - Website ontwerp",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#18A660"
          title="Website ontwerp"
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
          content={
            <>
              Ik ontwerp een rustgevende website waarbij de kruiden centraal
              staan. Met zachte kleuren, natuurlijke afbeeldingen en een
              intuïtieve navigatie. Informatieve inhoud over kruiden, een
              gebruiksvriendelijke webshop met een responsive design
            </>
          }
        />

        <ProjectGeneric
          color="#F5FFED"
          border="#18A660"
          divider={true}
          title="Uitwerking"
          content="Hieronder vind je de uitwerking van de websites, inclusief buttons die direct naar de live website leiden. Dit project is gerealiseerd in samenwerking met Sjors van Holst. Ik was verantwoordelijk voor de vormgeving, terwijl hij heeft de volledige website geprogrammeerd. "
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
