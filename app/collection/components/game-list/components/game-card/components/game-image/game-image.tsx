import Image from "next/image";
import { twMerge as tw } from "tailwind-merge";
import { Game } from "~api";

type Size = "sm" | "lg";

type Props = {
  game: Game;
  size?: Size;
};

export const GameImage: React.FC<Props> = ({ game, size = "sm" }) => {
  const sizeMap: { [key in Size]: string } = {
    sm: "w-24",
    lg: "w-48",
  };

  return (
    <Image
      src={game.image.text}
      alt={game.name.text}
      className={tw("border border-slate-500 rounded", sizeMap[size])}
      width={96}
      height={96}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsY/jfBwAEjgINT3lokAAAAABJRU5ErkJggg=="
    />
  );
};
