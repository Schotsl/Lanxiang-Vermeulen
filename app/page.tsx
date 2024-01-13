// TODO: Rename project to projects

import { Project } from "@/types";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Socials from "@/components/Socials";
import Projects from "@/components/Projects";

import firstImage from "@/public/images/design/breng-een-boek-tot-leven/header.png";
import secondImage from "@/public/images/design/clubsafe-stappen-doen-we-samen/header.png";
import thirdImage from "@/public/images/design/de-kracht-van-kruidenpower/header.png";
import fourthImage from "@/public/images/design/stem-tegen-fast-fashion/header.png";
import fifthImage from "@/public/images/design/het-passieproject/header.png";

export const metadata = {
  title: "Lxframes - Design",
};

const projects = [
  {
    slug: "breng-een-boek-tot-leven",
    width: "one-third",
    image: firstImage,
    title: "Breng een boek tot leven!",
    client: "Hogeschool van Amsterdam",
    subtitle: "Expositie",
  },
  {
    slug: "clubsafe-stappen-doen-we-samen",
    width: "two-third",
    image: secondImage,
    title: "Clubsafe: Stappen doen we samen!",
    client: "Hogeschool van Amsterdam",
    subtitle: "Design",
  },
  {
    slug: "de-kracht-van-kruidenpower",
    width: "two-third",
    image: thirdImage,
    title: "De kracht van kruidenpower",
    client: "Nicole Trompetter",
    subtitle: "Website",
  },
  {
    slug: "stem-tegen-fast-fashion",
    width: "one-third",
    image: fourthImage,
    title: "Stem tegen Fast Fashion",
    client: "Mediacollege Amsterdam",
    subtitle: "Design voor",
  },
  {
    slug: "het-passieproject",
    width: "one-one",
    image: fifthImage,
    title: "Het passieproject",
    client: "Hogeschool van Amsterdam",
    subtitle: "Design",
  },
] as Project[];

export default function Design() {
  return (
    <body>
      <Header />
      <main>
        <Projects projects={projects} />
        <Socials />
        <Footer />
      </main>
    </body>
  );
}
