import Link from "next/link";
import Image from "next/image";
import style from "./page.module.scss";

export const metadata = {
  title: "Lxframes",
  description: "Lxframes",
};

export default function Home() {
  return (
    <body className={style.home}>
      <header className={style.home__header}>
        <Image
          src="/images/logo.png"
          alt="Lxframes Logo"
          width={408}
          height={162}
          className={style.home__logo}
        />
        <h1 className={style.home__title}>Lxframes</h1>
      </header>
      <main>
        <section className={style.home__section}>
          <Link className={style.home__link} href="/fotografie">
            <figure className={style.home__figure}>
              <Image
                src="/images/index/fotografie (to-be-replaced).png"
                alt="TO BE ADDED"
                width={1015}
                height={784}
                className={style.home__image}
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
                src="/images/index/design (to-be-replaced).png"
                alt="TO BE ADDED"
                width={1015}
                height={784}
                className={style.home__image}
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
