export const metadata = {
  title: "Lxframes - Fotografie - [slug]",
};

type DesignProps = {
  params: { slug: string };
};

export default function FotografieSlug({ params: { slug } }: DesignProps) {
  return (
    <body>
      <h1>Fotografie - {slug}</h1>
    </body>
  );
}
