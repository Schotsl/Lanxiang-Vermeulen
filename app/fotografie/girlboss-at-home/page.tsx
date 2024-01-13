import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

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
          title="Girlboss at home"
          prefix="The"
          suffix="serie"
          image={{
            src: "/images/fotografie/girlboss-at-home/header.jpg",
            alt: "Girlboss at home",
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
              alt: "",
              src: "/images/fotografie/girlboss-at-home/1.jpg",
              size: "one-one",
              width: 3024,
              height: 4032,
            },
            {
              alt: "",
              src: "/images/fotografie/girlboss-at-home/2.jpg",
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
