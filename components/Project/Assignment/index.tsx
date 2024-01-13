import styles from "./ProjectAssignment.module.scss";

import { CSSProperties, ReactNode } from "react";

type ProjectAssignmentProps = {
  title: ReactNode;
  color?: string;
  border?: string;

  quote?: ReactNode;
  author?: ReactNode;
  content?: ReactNode;
};

export default function ProjectAssignment({
  title,
  color,
  border,
  quote,
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

      {quote && <p className={styles.assignment__quote}>{quote}</p>}

      {content && <p className={styles.assignment__content}>{content}</p>}

      {author && <p className={styles.assignment__author}>{author}</p>}
    </section>
  );
}
