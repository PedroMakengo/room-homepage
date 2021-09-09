import style from "./style.module.scss";

export function Discover() {
  return (
    <div className={style.discover}>
      <h1>Discover innovative ways to decorate</h1>
      <p>
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
      </p>
      <a href="#">
        SHOP NOW <img src="../../images/icon-arrow.svg" alt="" />{" "}
      </a>
    </div>
  );
}
