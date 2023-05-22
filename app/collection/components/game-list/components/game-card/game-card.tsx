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
    <li key={game.name.text} className="flex items-center space-x-4 text-left">
      <Image
        src={game.image.text}
        alt={game.name.text}
        className="w-16 h-16"
        width={64}
        height={64}
      />
      <div>
        <div>{game.name.text}</div>
        <div className="text-gray-500">{game.yearpublished.text}</div>
      </div>
    </li>
  );
};
