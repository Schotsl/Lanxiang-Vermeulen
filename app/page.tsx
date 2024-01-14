import Link from "next/link";
import Image from "next/image";
import style from "./page.module.scss";

import imageLogo from "@/public/images/logo.png";
import imageDesign from "@/public/images/index/design.png";
import imageFotografie from "@/public/images/index/fotografie.png";

export const metadata = {
  title: "Lxframes",
};

export default function Home() {
  return (
    <body className={style.home}>
      <header className={style.home__header}>
        <Image
          src={imageLogo}
          alt="Lxframes logo"
          className={style.home__logo}
          placeholder="blur"
        />
        <h1 className={style.home__title}>Lxframes</h1>
      </header>
      <main className={style.home__main}>
        <section className={style.home__main__section}>
          <Link className={style.home__link} href="/fotografie">
            <figure className={style.home__figure}>
              <Image
                src={imageFotografie}
                alt="Fotografie"
                className={style.home__image}
                placeholder="blur"
              />
              <figcaption className={style.home__caption}>
                Mijn werk
                <span className={style.home__span}>fotografie</span>
              </figcaption>
            </figure>
          </Link>
          <Link className={style.home__link} href="/design">
            <figure className={style.home__figure}>
              <Image
                src={imageDesign}
                alt="Design"
                className={style.home__image}
                placeholder="blur"
              />

              <figcaption className={style.home__caption}>
                Mijn werk
                <span className={style.home__span}>design</span>
              </figcaption>
            </figure>
          </Link>
        </section>
      </main>
    </body>
  );
}
