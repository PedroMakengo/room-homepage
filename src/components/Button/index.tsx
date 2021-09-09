interface ButtonProps {
  className?: string;
  src?: string;
}

export function Button({ className, src }: ButtonProps) {
  return (
    <button className={className}>
      <img src={src} alt="Imagem" />
    </button>
  );
}
