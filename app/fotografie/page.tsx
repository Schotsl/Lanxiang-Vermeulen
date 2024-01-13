// TODO: Rename project to projects
import { Project } from "@/types";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Socials from "@/components/Socials";
import Projects from "@/components/Projects";

import firstImage from "@/public/images/fotografie/denim-day/header.jpg";
import secondImage from "@/public/images/fotografie/girl-in-white/header.jpg";
import thirdImage from "@/public/images/fotografie/feeling-the-brown-tones/header.jpg";
import fourthImage from "@/public/images/fotografie/main-character/header.jpg";
import fifthImage from "@/public/images/fotografie/girl-boss-at-home/header.jpg";

export const metadata = {
  title: "Lxframes - Fotografie",
};

const projects = [
  {
    slug: "/fotografie/denim-day",
    width: "two-third",
    image: firstImage,
    title: "Denim Day",
    client: "Vrijwerk",
    subtitle: "Fotoserie",
  },
  {
    slug: "/fotografie/girl-in-white",
    width: "one-third",
    image: secondImage,
    title: "Girl in white",
    client: "Vrijwerk",
    subtitle: "Fotoserie",
  },
  {
    slug: "/fotografie/feeling-the-brown-tones",
    width: "one-third",
    image: thirdImage,
    title: "Feeling the brown tones",
    client: "Malvie",
    subtitle: "Fotoserie",
  },
  {
    slug: "/fotografie/main-character",
    width: "one-third",
    image: fourthImage,
    title: "Main character",
    client: "Selin",
    subtitle: "Fotoserie",
  },
  {
    slug: "/fotografie/girl-boss-at-home",
    width: "one-third",
    image: fifthImage,
    title: "Girlboss at home",
    client: "L'attirance",
    subtitle: "Fotoserie",
  },
] as Project[];

export default function Fotografie() {
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
