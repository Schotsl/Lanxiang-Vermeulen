"use client";

import styles from "./Project.module.scss";

import { Project } from "@/types";

import ProjectItem from "@/components/Project/Item";

type ProjectProps = {
  projects: Project[];
};

export default function Project({ projects }: ProjectProps) {
  return (
    <section className={styles.projects}>
      <h1 className={styles.projects__title}>Projects</h1>

      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </section>
  );
}
