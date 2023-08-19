import { useQuery } from "@tanstack/react-query";
import { FiUsers, FiClock, FiExternalLink } from "react-icons/fi";
import { Game, GameDetails as GameDetailsType, getGameDetails } from "~api";
import { Logo } from "~app/components";
import { GameImage } from "..";
import { GameDescription, StatBadge } from "./components";

type Props = {
  game: Game;
};

const getValue = (min: string, max: string) => {
  if (min === max) {
    return min;
  }

  return `${min} - ${max}`;
};

export const GameDetails: React.FC<Props> = ({ game }) => {
  const id = game.attributes.objectid;

  const {
    data: gameDetails,
    isLoading,
    isError,
  } = useQuery<GameDetailsType | null>(["details", id], () =>
    getGameDetails({ id })
  );

  return (
    <div className="grid place-items-center gap-4">
      <div className="text-2xl">{game.name.text}</div>
      <GameImage game={game} size="lg" />
      {isLoading && (
        <div className="pt-12 animate-pulse">
          <Logo />
        </div>
      )}
      {/* TODO: clean this up, too much repetition and handle case when player count and time are same on min and max */}
      {gameDetails && (
        <>
          <div className="flex flex-wrap justify-center gap-4">
            <StatBadge
              icon={<FiUsers />}
              tooltipText="Players"
              value={getValue(
                gameDetails.minplayers.attributes.value,
                gameDetails.maxplayers.attributes.value
              )}
            />
            <StatBadge
              icon={<FiClock />}
              tooltipText="Time"
              value={`${getValue(
                gameDetails.minplaytime.attributes.value,
                gameDetails.maxplaytime.attributes.value
              )} minutes`}
            />
            <a
              href={`https://boardgamegeek.com/boardgame/${gameDetails.attributes.id}`}
              target="_blank"
            >
              <StatBadge
                icon={<FiClock />}
                value="BGG Page"
                className="hover:bg-slate-600"
              />
            </a>
          </div>

          <GameDescription description={gameDetails.description.text} />
        </>
      )}
      {isError && (
        <p className="text-center text-red-300">
          Oh no! Something bad happened. Please try again. If the issue
          persists, try again in a few minutes (Board Game Geek may be limiting
          our requests).
        </p>
      )}
    </div>
  );
};
