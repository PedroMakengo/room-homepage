import { Button } from "../Button";
import { Discover } from "../Discover";
import { Nav } from "../Nav";
import style from "./style.module.scss";

export function Background() {
  return (
    <main className={style.main}>
      <section className={style.contentTop}>
        <Nav />
        <div className={style.describeContent}>
          <Discover />
          <div className={style.buttons}>
            <Button
              className={style.active}
              src="../../images/icon-angle-left.svg"
            />
            <Button src="../../images/icon-angle-right.svg" />
          </div>
        </div>
      </section>
      <section className={style.about}>
        <div className={style.banner}></div>
        <div className={style.aboutContent}>
          <h1>About our furniture</h1>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <div className={style.background}></div>
      </section>
    </main>
  );
}
