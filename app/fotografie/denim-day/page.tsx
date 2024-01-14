import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

import imageHeader from "@/public/images/fotografie/denim-day/header.jpg";
import imageFirst from "@/public/images/fotografie/denim-day/1.jpg";
import imageSecond from "@/public/images/fotografie/denim-day/2.jpg";
import imageThird from "@/public/images/fotografie/denim-day/3.jpg";

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
          image={imageHeader}
          title="Denim day"
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
              size: "one-two",
              image: imageFirst,
            },
            {
              size: "one-two",
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
