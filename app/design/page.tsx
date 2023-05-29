// TODO: Rename project to projects

import { Project } from "@/types";

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
      src: "/images/design/1.jpeg",
      alt: "Amsterdam Designmuseum",
      width: 1920,
      height: 1080,
    },
  },
  {
    width: "two-thirds",
    title: "Amsterdam Designmuseum",
    client: "Mediacollege Amsterdam",
    subtitle: "Huisstijl voor",
    image: {
      src: "/images/design/2.jpeg",
      alt: "Amsterdam Designmuseum",
      width: 1920,
      height: 1080,
    },
  },
  {
    width: "one-third",
    title: "Amsterdam Designmuseum",
    client: "Mediacollege Amsterdam",
    subtitle: "Huisstijl voor",
    image: {
      src: "/images/design/3.jpeg",
      alt: "Amsterdam Designmuseum",
      width: 1920,
      height: 1080,
    },
  },
  {
    width: "one-third",
    title: "Amsterdam Designmuseum",
    client: "Mediacollege Amsterdam",
    subtitle: "Huisstijl voor",
    image: {
      src: "/images/design/4.jpeg",
      alt: "Amsterdam Designmuseum",
      width: 1920,
      height: 1080,
    },
  },
  {
    width: "one-third",
    title: "Amsterdam Designmuseum",
    client: "Mediacollege Amsterdam",
    subtitle: "Huisstijl voor",
    image: {
      src: "/images/design/5.jpeg",
      alt: "Amsterdam Designmuseum",
      width: 1920,
      height: 1080,
    },
  },
  {
    width: "one-third",
    title: "Amsterdam Designmuseum",
    client: "Mediacollege Amsterdam",
    subtitle: "Huisstijl voor",
    image: {
      src: "/images/design/6.jpeg",
      alt: "Amsterdam Designmuseum",
      width: 1920,
      height: 1080,
    },
  },
  {
    width: "two-thirds",
    title: "Amsterdam Designmuseum",
    client: "Mediacollege Amsterdam",
    subtitle: "Huisstijl voor",
    image: {
      src: "/images/design/7.jpeg",
      alt: "Amsterdam Designmuseum",
      width: 1920,
      height: 1080,
    },
  },
] as Project[];

export default function Design() {
  return <Projects projects={projects} />;
}
