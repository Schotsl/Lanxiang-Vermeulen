import styles from "./Footer.module.scss";

import FooterList from "@/components/Footer/List";
import FooterAbout from "@/components/Footer/About";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const aboutContent = {
    text: "Ontdek de kracht van vormgeving en fotografie met LXFrames. Neem vandaag nog contact met mij op om jouw project te bespreken en samen iets unieks te creëren. Ik kijk er naar uit om van je te horen!",
    title: "Lxframes",
    rights: (
      <>
        &copy; {currentYear} ontwikkeld door{" "}
        <a href="https://sjorsvanholst.nl">Sjors van Holst</a>
      </>
    ),
  };

  const navigationContent = {
    title: "Navigatie",
    links: [
      {
        href: "/design",
        label: "Design",
      },
      {
        href: "/fotografie",
        label: "Fotografie",
      },
      {
        href: "/over-mij",
        label: "Over mij",
      },
      {
        href: "/contact",
        label: "Contact",
      },
    ],
  };

  const socialsContent = {
    title: "Socials",
    links: [
      {
        href: "https://www.instagram.com/lanxiangvermeulen/",
        label: "Instagram",
      },
      {
        href: "https://www.linkedin.com/in/lanxiang-vermeulen-498471185/",
        label: "LinkedIn",
      },
      {
        href: "https://www.tiktok.com/@lanxiangvermeulen",
        label: "TikTok",
      },
      {
        href: "https://www.facebook.com/lanxiang.vermeulen/",
        label: "Facebook",
      },
    ],
  };

  return (
    <footer className={styles.footer}>
      <FooterAbout {...aboutContent} />

      <FooterList {...navigationContent} />
      <FooterList {...socialsContent} />

      {/* TODO: Add <a href="http://www.freepik.com">Designed by Vectorium / Freepik</a> */}
    </footer>
  );
}
