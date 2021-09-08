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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptate quisquam ea, tempora amet laboriosam voluptatibus a modi
              vitae repudiandae pariatur. Tempora molestias consectetur fugit
              corporis ipsum quia incidunt voluptates!
            </p>
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
