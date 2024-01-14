import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

import imageHeader from "@/public/images/fotografie/girlboss-at-home/header.jpg";
import imageFirst from "@/public/images/fotografie/girlboss-at-home/1.jpg";
import imageSecond from "@/public/images/fotografie/girlboss-at-home/2.jpg";

export const metadata = {
  title: "Lxframes - Girlboss at home",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#9E6C47"
          image={imageHeader}
          title="Girlboss at home"
          prefix="The"
          suffix="serie"
          position="top"
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
                  <b>Model:</b> Aimée Algra
                </li>
                <li>
                  <b>Make-up:</b> Marjolein
                </li>
              </ul>
            </>
          }
        />

        <ProjectGeneric
          color="#FFF6E8"
          border="#9E6C47"
          title="Publicatie L'attirance magazine"
          content={
            <>
              Girlboss at home is een fotoserie waarin de kracht van vrouwen de
              hoofdrol speelt. De foto is eenvoudig en in een huiselijke
              setting.
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
