export type WidthType = "one-one" | "one-two" | "one-third" | "two-third";

export type Link = {
  href: string;
  label: string;
};

export type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  width: WidthType;
  image: ImageType;
  title: string;
  client: string;
  subtitle: string;
};
