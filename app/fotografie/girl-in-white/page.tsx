import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

export const metadata = {
  title: "Lxframes - Girl in white",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#9E6C47"
          title="Girl in white"
          prefix="The"
          suffix="serie"
          image={{
            src: "/images/fotografie/girl-in-white/header.jpg",
            alt: "Girl in white",
            width: 5184,
            height: 3456,
          }}
        />

        <ProjectAssignment
          color="#FFF6E8"
          border="#9E6C47"
          title="Het team"
          content={
            <>
              <ul>
                <li>
                  <b>Art director/styling/fotograaf:</b> Lanxiang Vermeulen
                </li>
                <li>
                  <b>Co-director:</b> Aimée Algra
                </li>
                <li>
                  <b>Model:</b> Benthe (Filipamodels)
                </li>
                <li>
                  <b>Make-up:</b> Shoshanna Gast-Bajoumy
                </li>
              </ul>
            </>
          }
        />

        <ProjectGeneric
          color="#FFF6E8"
          border="#9E6C47"
          title="Girl in white"
          content={
            <>
              Hieronder vind je een deel van mijn grondige onderzoek voor het
              Amsterdam Designmuseum project. Ik heb me toegewijd aan het
              verkennen van de doelgroep, concurrentie en het product. Daarnaast
              heb ik uitgebreid onderzoek gedaan naar bijpassende ontwerpers en
              disciplines.
            </>
          }
          divider={true}
          images={[
            {
              alt: "",
              src: "/images/fotografie/girl-in-white/1.jpg",
              size: "one-two",
              width: 3024,
              height: 4032,
            },
            {
              alt: "",
              src: "/images/fotografie/girl-in-white/2.jpg",
              size: "one-two",
              width: 3024,
              height: 4032,
            },
            {
              alt: "",
              src: "/images/fotografie/girl-in-white/3.jpg",
              size: "one-one",
              width: 3024,
              height: 4032,
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
