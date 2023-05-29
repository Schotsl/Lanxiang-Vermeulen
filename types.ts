export type Width = "one-third" | "two-third";

export type Link = {
  href: string;
  label: string;
};

export type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  width: Width;
  image: Image;
  title: string;
  client: string;
  subtitle: string;
};
