import Image from "next/image";
import { Game } from "~api";

type Props = {
  game?: Game;
};

export const GameCard: React.FC<Props> = ({ game }) => {
  if (!game) {
    return null;
  }

  return (
    <li
      key={game.name.text}
      className="w-full md:w-60 gap-4 flex md:flex-col items-center md:justify-center md:text-center p-4 backdrop-blur-[2px] border-2 border-slate-700 rounded"
    >
      <Image
        src={game.image.text}
        alt={game.name.text}
        className="w-24 border border-slate-500 rounded"
        width={96}
        height={96}
      />
      <div>
        <div>{game.name.text}</div>
        <div className="text-slate-400">{game.yearpublished.text}</div>
      </div>
    </li>
  );
};
