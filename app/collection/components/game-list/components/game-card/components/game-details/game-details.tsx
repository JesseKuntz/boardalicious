import { useQuery } from "@tanstack/react-query";
import { FiUsers, FiClock, FiExternalLink } from "react-icons/fi";
import { Game, GameDetails as GameDetailsType, getGameDetails } from "~api";
import { Logo, Tooltip } from "~app/components";
import { GameImage } from "..";
import { GameDescription } from "./components";

type Props = {
  game: Game;
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
      {gameDetails && (
        <>
          <div className="flex gap-4">
            <div className="rounded bg-slate-700 py-2 px-4">
              <div className="flex gap-3 items-center">
                <Tooltip trigger={<FiUsers />}>Players</Tooltip>
                <span>
                  {gameDetails.minplayers.attributes.value} -{" "}
                  {gameDetails.maxplayers.attributes.value}
                </span>
              </div>
            </div>
            <div className="rounded bg-slate-700 py-2 px-4">
              <div className="flex gap-3 items-center">
                <Tooltip trigger={<FiClock />}>Time</Tooltip>
                <span>
                  {gameDetails.minplaytime.attributes.value} -{" "}
                  {gameDetails.maxplaytime.attributes.value} minutes
                </span>
              </div>
            </div>
            <a
              href={`https://boardgamegeek.com/boardgame/${gameDetails.attributes.id}`}
              target="_blank"
            >
              <div className="rounded bg-slate-700 py-2 px-4 hover:bg-slate-600">
                <div className="flex gap-3 items-center">
                  <FiExternalLink />
                  BGG Page
                </div>
              </div>
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
