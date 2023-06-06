import styles from "./ProjectAssignment.module.scss";

import { CSSProperties, ReactNode } from "react";

type ProjectAssignmentProps = {
  color?: string;
  border?: string;
  content: ReactNode;
};

export default function ProjectAssignment({
  color,
  border,
  content,
}: ProjectAssignmentProps) {
  // TODO: Use SCSS variables everywhere instead of inline styles
  const assignmentStyle = {
    "--local-color": color,
    "--local-border": border,
  } as CSSProperties;

  return (
    <section className={styles.assignment} style={assignmentStyle}>
      <h2 className={styles.assignment__title}>Opdracht</h2>

      <p className={styles.assignment__content}>{content}</p>
    </section>
  );
}
