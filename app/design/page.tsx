// TODO: Rename project to projects

import { Project } from "@/types";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Socials from "@/components/Socials";
import Projects from "@/components/Projects";

export const metadata = {
  title: "Lxframes - Design",
};

const projects = [
  {
    slug: "breng-een-boek-tot-leven",
    width: "one-third",
    title: "Breng een boek tot leven!",
    client: "Hogeschool van Amsterdam",
    subtitle: "Expositie",
    image: {
      src: "/images/design/breng-een-boek-tot-leven/header.png",
      alt: "Boek vertalen op je eigen manier",
      width: 5184,
      height: 3456,
    },
  },
  {
    slug: "clubsafe-stappen-doen-we-samen",
    width: "two-third",
    title: "Clubsafe: Stappen doen we samen!",
    client: "Hogeschool van Amsterdam",
    subtitle: "Design",
    image: {
      src: "/images/design/clubsafe-stappen-doen-we-samen/header.png",
      alt: "Clubsafe: Stappen doen we samen!",
      width: 5000,
      height: 3000,
    },
  },
  {
    slug: "de-kracht-van-kruidenpower",
    width: "two-third",
    title: "De kracht van kruidenpower",
    client: "Nicole Trompetter",
    subtitle: "Website",
    image: {
      src: "/images/design/de-kracht-van-kruidenpower/header.png",
      alt: "Website ontwerp",
      width: 4000,
      height: 6000,
    },
  },
  {
    slug: "stem-tegen-fast-fashion",
    width: "one-third",
    title: "Stem tegen Fast Fashion",
    client: "Mediacollege Amsterdam",
    subtitle: "Design voor",
    image: {
      src: "/images/design/stem-tegen-fast-fashion/header.png",
      alt: "Stem tegen Fast Fashion",
      width: 1717,
      height: 1292,
    },
  },
  {
    slug: "het-passieproject",
    width: "one-one",
    title: "Het passieproject",
    client: "Hogeschool van Amsterdam",
    subtitle: "Design",
    image: {
      src: "/images/design/het-passieproject/header.png",
      alt: "Het passieproject",
      width: 4162,
      height: 2770,
    },
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
