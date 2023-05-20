import { Game } from "~api";
import { GameCard } from "./components";

type Props = {
  collection?: Game[];
};

export const GameList: React.FC<Props> = ({ collection }) => {
  if (!collection?.length) {
    return null;
  }

  return (
    <div className="mt-8">
      <ul className="flex flex-wrap gap-4">
        {collection.map((game) => (
          <GameCard key={game.name.text} game={game} />
        ))}
      </ul>
    </div>
  );
};
