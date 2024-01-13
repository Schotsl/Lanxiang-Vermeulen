import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

export const metadata = {
  title: "Lxframes - Feeling the brown tones",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#9E6C47"
          title='The "Feeling the brown tones" series'
          image={{
            src: "/images/fotografie/feeling-the-brown-tones/header.jpg",
            alt: "Feeling the brown tones",
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
                <b>Assistent fotograaf:</b> Laura Admiraal
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
          title="Publicatie Malvie magazine"
          content={
            <>
              Feeling the brown tones is een fotoserie waarin de bruine kleur de leidende rol speelt. De verschillende bruine tinten zijn overal te zien. Van de sproeten in haar gezicht tot de hele achtergrond.
            </>
          }
          divider={true}
          images={[
            {
              alt: "",
              src: "/images/fotografie/feeling-the-brown-tones/1.jpg",
              size: "one-one",
              width: 3024,
              height: 4032,
            },
            {
              alt: "",
              src: "/images/fotografie/feeling-the-brown-tones/2.jpg",
              size: "one-one",
              width: 3024,
              height: 4032,
            },
          ]}
        />

        <ProjectGeneric
          color="#FFF6E8"
          border="#9E6C47"
          title="Publicatie Fienfh Magazine"
          content={
            <>
              Red & Rosy is een fotoserie waarin natuur en mensen samenkomen. Het toont de mooie en elegante kant van een vrouwelijk model in haar meest passende kleuren. Terwijl op de achtergrond krachtige en ruwe rotsen te zien zijn. Deze combinatie maakt het plaatje compleet.
            </>
          }
          divider={true}
          images={[
            {
              alt: "",
              src: "/images/fotografie/feeling-the-brown-tones/3.png",
              size: "one-one",
              width: 3024,
              height: 4032,
            },
            {
              alt: "",
              src: "/images/fotografie/feeling-the-brown-tones/4.png",
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
