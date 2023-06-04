import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

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
      <Projects projects={projects} />
      <Socials />
      <Footer />
    </body>
  );
}
