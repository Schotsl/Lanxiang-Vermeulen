import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectHeader from "@/components/Project/Header";

import imageHeader from "@/public/images/contact/header.png";

export const metadata = {
  title: "Lxframes - Contact",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          back={false}
          color="#F1D9D8"
          image={imageHeader}
          title="Let's talk"
          content={
            <section
              style={{
                gap: "0.5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p>
                Wil je meer weten over mijn werkzaamheden? Ik denk graag met je
                mee!
              </p>

              <p style={{ fontSize: "1.25rem" }}>
                <b style={{ fontWeight: "600" }}>Mail mij: </b>
                <a href="mailto:info@lxframes.com">info@lxframes.com</a>
              </p>

              <p style={{ fontSize: "1.25rem" }}>
                <b style={{ fontWeight: "600" }}>
                  Socials | @lanxiangvermeulen
                </b>
              </p>

              <Socials minimized={true}></Socials>
            </section>
          }
        />

        <Footer />
      </main>
    </body>
  );
}
