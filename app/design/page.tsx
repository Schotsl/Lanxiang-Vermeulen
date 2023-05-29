// TODO: Rename project to projects

import Projects from "@/components/Project";

export const metadata = {
  title: "Lxframes - Design",
};

const projects = [
  {
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
];

export default function Design() {
  return <Projects projects={projects} />;
}
