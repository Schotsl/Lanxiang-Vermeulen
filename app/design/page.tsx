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
    width: "one-third",
    title: "Amsterdam Designmuseum",
    client: "Mediacollege Amsterdam",
    subtitle: "Huisstijl voor",
    image: {
      src: "/images/design/amsterdam-designmuseum/header.png",
      alt: "Amsterdam Designmuseum",
      width: 4000,
      height: 2500,
    },
  },
  {
    width: "two-third",
    title: "Posters voor protesters",
    client: "Mediacollege Amsterdam",
    subtitle: "Huisstijl voor",
    image: {
      src: "/images/design/posters-voor-protesters/header.png",
      alt: "Posters voor protesters",
      width: 4162,
      height: 2770,
    },
  },
  {
    width: "one-third",
    title: "Stem tegen Fast Fashion",
    client: "Mediacollege Amsterdam",
    subtitle: "Huisstijl voor",
    image: {
      src: "/images/design/stem-tegen-fast-fashion/header.png",
      alt: "Stem tegen Fast Fashion",
      width: 1717,
      height: 1292,
    },
  },
  {
    width: "one-third",
    title: "Restaurant website",
    client: "Mediacollege Amsterdam",
    subtitle: "Huisstijl voor",
    image: {
      src: "/images/design/restaurant-website/header.png",
      alt: "Restaurant website",
      width: 3199,
      height: 2262,
    },
  },
  {
    width: "one-third",
    title: "Website ontwerp",
    client: "Mediacollege Amsterdam",
    subtitle: "Huisstijl voor",
    image: {
      src: "/images/design/website-ontwerp/header.png",
      alt: "Website ontwerp",
      width: 4000,
      height: 6000,
    },
  },
  {
    width: "one-third",
    title: "Content ontwerpen en schrijven",
    client: "Mediacollege Amsterdam",
    subtitle: "Huisstijl voor",
    image: {
      src: "/images/design/concept-ontwerpen-en-schrijven/header.png",
      alt: "Content ontwerpen en schrijven",
      width: 5000,
      height: 3000,
    },
  },
  {
    width: "two-third",
    title: "Boek vertalen op je eigen manier",
    client: "Mediacollege Amsterdam",
    subtitle: "Huisstijl voor",
    image: {
      src: "/images/design/boek-vertalen-op-je-eigen-manier/header.png",
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
