import styles from "./ProjectAssignment.module.scss";

import { CSSProperties, ReactNode } from "react";

type ProjectAssignmentProps = {
  color?: string;
  border?: string;
  title: ReactNode;
  author: ReactNode;
  content: ReactNode;
};

export default function ProjectAssignment({
  color,
  border,
  title,
  author,
  content,
}: ProjectAssignmentProps) {
  // TODO: Use SCSS variables everywhere instead of inline styles
  const assignmentStyle = {
    "--local-color": color,
    "--local-border": border,
  } as CSSProperties;

  return (
    <section className={styles.assignment} style={assignmentStyle}>
      {/* TODO: Could probably be turned into a quote */}

      <h2 className={styles.assignment__title}>{title}</h2>

      <p className={styles.assignment__content}>{content}</p>

      <p className={styles.assignment__author}>{author}</p>
    </section>
  );
}
