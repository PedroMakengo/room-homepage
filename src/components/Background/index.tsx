import { About } from "../About";
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
        <About />
        <div className={style.background}></div>
      </section>
    </main>
  );
}
