import style from "./style.module.scss";

interface AboutProps {
  title?: string;
  paragraph?: string;
}

export function About({ title, paragraph }: AboutProps) {
  return (
    <div className={style.aboutContent}>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
}
