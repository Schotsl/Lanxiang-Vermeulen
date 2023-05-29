// React for Projects

"use client";

import styles from "./Project.module.scss";

import { Project } from "@/types";

import ProjectsItem from "@/components/Projects/Item";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className={styles.projects}>
      <h1 className={styles.projects__title}>Projects</h1>

      {projects.map((project, index) => (
        <ProjectsItem key={index} project={project} />
      ))}
    </section>
  );
}
