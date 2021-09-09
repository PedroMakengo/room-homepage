import style from "./style.module.scss";

export function Nav() {
  return (
    <div className={style.navegation}>
      <img src="../../images/logo.svg" alt="" />
      <nav>
        <a href="#">home</a>
        <a href="#">shop</a>
        <a href="#">about</a>
        <a href="#">contact</a>
      </nav>
    </div>
  );
}
