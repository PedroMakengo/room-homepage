import style from "./style.module.scss";

export function Background() {
  return (
    <main className={style.main}>
      <section className={style.contentTop}>
        <div className={style.navegation}>
          <img src="../../images/logo.svg" alt="" />
          <nav>
            <a href="#">home</a>
            <a href="#">shop</a>
            <a href="#">about</a>
            <a href="#">contact</a>
          </nav>
        </div>
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
            <a href="#">SHOP NOW </a>
          </div>
          <div className={style.buttons}>
            <button className={style.active}>1</button>
            <button>2</button>
          </div>
        </div>
      </section>
    </main>
  );
}
