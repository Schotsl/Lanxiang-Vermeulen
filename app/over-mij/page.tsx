import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import AboutHeader from "@/components/About/Header";
import AboutImages from "@/components/About/Images";
import AboutDescription from "@/components/About/Description";

export const metadata = {
  title: "Lxframes - Over mij",
};

export default function OverMij() {
  return (
    <body>
      <Header />
      <main>
        <AboutHeader />
        <AboutDescription />
        <AboutImages />
        <Socials />
        <Footer />
      </main>
    </body>
  );
}
