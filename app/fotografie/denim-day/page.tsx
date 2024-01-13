import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

export const metadata = {
  title: "Lxframes - Denim day",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#9E6C47"
          title="Denim day"
          prefix="The"
          suffix="serie"
          image={{
            src: "/images/fotografie/denim-day/header.jpg",
            alt: "Denim day",
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
          title="Denim day"
          content={
            <>
              Deze serie brengt mens en natuur dichter bij elkaar. Het model
              springt eruit en het is duidelijk dat zij de hoofdrol heeft.
            </>
          }
          divider={true}
          images={[
            {
              alt: "",
              src: "/images/fotografie/denim-day/1.jpg",
              size: "one-two",
              width: 3024,
              height: 4032,
            },
            {
              alt: "",
              src: "/images/fotografie/denim-day/2.jpg",
              size: "one-two",
              width: 3024,
              height: 4032,
            },
            {
              alt: "",
              src: "/images/fotografie/denim-day/3.jpg",
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
