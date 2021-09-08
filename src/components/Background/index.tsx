import style from "./style.module.scss";

export function Background() {
  return (
    <main className={style.main}>
      <section>
        <div className={style.navegation}>
          <img src="" alt="" />

          <nav>
            <a href="#">home</a>
            <a href="#">shop</a>
            <a href="#">about</a>
            <a href="#">contact</a>
          </nav>
        </div>
      </section>
    </main>
  );
}
