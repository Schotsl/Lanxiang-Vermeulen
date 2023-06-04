import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import Project from "@/components/Project";

export const metadata = {
  title: "Lxframes - Design - [slug]",
};

type DesignProps = {
  params: { slug: string };
};

export default function DesignDetail({ params: { slug } }: DesignProps) {
  return (
    <body>
      <Header />
      <Project />
      <Socials />
      <Footer />
    </body>
  );
}
