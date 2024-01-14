import { StaticImageData } from "next/image";

export type WidthType = "one-one" | "one-two" | "one-third" | "two-third";

export type Link = {
  href: string;
  label: string;
};

export type Project = {
  slug: string;
  width: WidthType;
  image: StaticImageData;
  title: string;
  client: string;
  subtitle: string;
};
