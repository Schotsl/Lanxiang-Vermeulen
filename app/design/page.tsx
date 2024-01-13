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
    slug: "amsterdam-designmuseum",
    width: "one-third",
    title: "Amsterdam Designmuseum",
    client: "Mediacollege Amsterdam",
    subtitle: "Design voor",
    image: {
      src: "/images/design/amsterdam-designmuseum/header.png",
      alt: "Amsterdam Designmuseum",
      width: 4000,
      height: 2500,
    },
  },
  {
    slug: "het-passieproject",
    width: "two-third",
    title: "Het passieproject",
    client: "Hogeschool van Amsterdam",
    subtitle: "Design voor",
    image: {
      src: "/images/design/het-passieproject/header.png",
      alt: "Het passieproject",
      width: 4162,
      height: 2770,
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
    slug: "restaurant-website",
    width: "one-third",
    title: "Restaurant website",
    client: "Hogeschool van Amsterdam",
    subtitle: "Design voor",
    image: {
      src: "/images/design/restaurant-website/header.png",
      alt: "Restaurant website",
      width: 3199,
      height: 2262,
    },
  },
  {
    slug: "de-kracht-van-kruidenpower",
    width: "one-third",
    title: "Website ontwerp",
    client: "Nicole Trompetter",
    subtitle: "Design voor",
    image: {
      src: "/images/design/de-kracht-van-kruidenpower/header.png",
      alt: "Website ontwerp",
      width: 4000,
      height: 6000,
    },
  },
  {
    slug: "clubsafe-stappen-doen-we-samen",
    width: "one-third",
    title: "Content ontwerpen en schrijven",
    client: "Hogeschool van Amsterdam",
    subtitle: "Design voor",
    image: {
      src: "/images/design/clubsafe-stappen-doen-we-samen/header.png",
      alt: "Content ontwerpen en schrijven",
      width: 5000,
      height: 3000,
    },
  },
  {
    slug: "breng-een-boek-tot-leven",
    width: "two-third",
    title: "Boek vertalen op je eigen manier",
    client: "Hogeschool van Amsterdam",
    subtitle: "Design voor",
    image: {
      src: "/images/design/breng-een-boek-tot-leven/header.png",
      alt: "Boek vertalen op je eigen manier",
      width: 5184,
      height: 3456,
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
