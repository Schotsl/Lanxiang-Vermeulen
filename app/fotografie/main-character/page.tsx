import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

export const metadata = {
  title: "Lxframes - Main character",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#9E6C47"
          title="main character"
          prefix="The"
          suffix="serie"
          image={{
            src: "/images/fotografie/main-character/header.jpg",
            alt: "Main character",
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
                  <b>Model:</b> Julia van der Sande (@filipamodels)
                </li>
                <li>
                  <b>Co-director:</b> Aimée Algra
                </li>
                <li>
                  <b>Styling:</b> Calista Honing
                </li>
                <li>
                  <b>Make-up:</b> Mariana Komen
                </li>
              </ul>
            </>
          }
        />

        <ProjectGeneric
          color="#FFF6E8"
          border="#9E6C47"
          title="Publicatie Selin magazine"
          content={
            <>
              Deze serie draait om de krachtige uitstraling van vrouwen. Neem de
              rol van een hoofdpersonage op je en grijp jouw moment!
            </>
          }
          divider={true}
          images={[
            {
              alt: "",
              src: "/images/fotografie/main-character/1.png",
              size: "one-one",
              width: 3024,
              height: 4032,
            },
            {
              alt: "",
              src: "/images/fotografie/main-character/2.png",
              size: "one-one",
              width: 3024,
              height: 4032,
            },
            {
              alt: "",
              src: "/images/fotografie/main-character/3.png",
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
