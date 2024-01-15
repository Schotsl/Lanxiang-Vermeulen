import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

import imageHeader from "@/public/images/fotografie/girl-in-white/header.jpg";
import imageFirst from "@/public/images/fotografie/girl-in-white/1.jpg";
import imageSecond from "@/public/images/fotografie/girl-in-white/2.jpg";
import imageThird from "@/public/images/fotografie/girl-in-white/3.jpg";

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
          image={imageHeader}
          title="Girl in white"
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
