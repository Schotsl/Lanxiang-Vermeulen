import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

import imageHeader from "@/public/images/fotografie/main-character/header.jpg";
import imageFirst from "@/public/images/fotografie/main-character/1.png";
import imageSecond from "@/public/images/fotografie/main-character/2.png";
import imageThird from "@/public/images/fotografie/main-character/3.png";

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
          image={imageHeader}
          title="main character"
          prefix="The"
          suffix="serie"
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
              size: "one-one",
              image: imageFirst,
            },
            {
              size: "one-one",
              image: imageSecond,
            },
            {
              size: "one-one",
              image: imageThird,
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
