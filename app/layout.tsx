import "@/styles/globals.scss";
import "@/styles/variables.scss";
import "@/styles/mixins.scss";

export const dynamic = "force-static";
export const metadata = {
  title: "Lxframes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
