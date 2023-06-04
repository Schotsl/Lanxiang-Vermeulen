import styles from "./ProjectAssignment.module.scss";

import { ReactNode } from "react";

type ProjectAssignmentProps = {
  content: ReactNode;
};

export default function ProjectAssignment({ content }: ProjectAssignmentProps) {
  return (
    <section className={styles.assignment}>
      <h2 className={styles.assignment_title}>Opdracht</h2>

      <p className={styles.assignment_content}>{content}</p>
    </section>
  );
}
