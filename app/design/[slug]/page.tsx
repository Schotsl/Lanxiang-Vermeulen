export const metadata = {
  title: "Lxframes - Design - [slug]",
};

type DesignProps = {
  params: { slug: string };
};

export default function DesignDetail({ params: { slug } }: DesignProps) {
  return (
    <div>
      <h1>Design - {slug}</h1>
    </div>
  );
}
