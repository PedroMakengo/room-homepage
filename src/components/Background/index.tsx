import { Nav } from "../Nav";
import style from "./style.module.scss";

export function Background() {
  return (
    <main className={style.main}>
      <section className={style.contentTop}>
        <Nav />
        <div className={style.describeContent}>
          <div className={style.discover}>
            <h1>Discover innovative ways to decorate</h1>
            <p>
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            <a href="#">
              SHOP NOW <img src="../../images/icon-arrow.svg" alt="" />{" "}
            </a>
          </div>
          <div className={style.buttons}>
            <button className={style.active}>
              <img src="../../images/icon-angle-left.svg" alt="" />
            </button>
            <button>
              <img src="../../images/icon-angle-right.svg" alt="" />
            </button>
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
