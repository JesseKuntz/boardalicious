import { useQuery } from "@tanstack/react-query";
import { FiUsers, FiClock, FiExternalLink } from "react-icons/fi";
import { GameDetails as GameDetailsType, getGameDetails } from "~api";
import { Logo, CopyURLButton } from "~app/components";
import { GameImage } from "../../../../collection/components/game-list/components/game-card/components";
import { GameDescription, StatBadge } from "./components";

type Props = {
  id: string;
};

const getValue = (min: string, max: string) => {
  if (min === max) {
    return min;
  }

  return `${min} - ${max}`;
};

const getGameName = (gameDetails: GameDetailsType) => {
  return Array.isArray(gameDetails.name)
    ? gameDetails.name[0].attributes.value
    : gameDetails.name.attributes.value;
};

export const GameDetails: React.FC<Props> = ({ id }) => {
  const {
    data: gameDetails,
    isLoading,
    isError,
  } = useQuery<GameDetailsType | null>(["details", id], () =>
    getGameDetails({ id })
  );

  return (
    <div className="grid place-items-center gap-4">
      {isLoading ? (
        <div className="animate-pulse">
          <Logo />
        </div>
      ) : (
        <>
          {gameDetails && (
            <>
              <div className="text-2xl">{getGameName(gameDetails)}</div>
              <GameImage
                src={gameDetails.image.text}
                alt={getGameName(gameDetails)}
                size="lg"
              />
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
                    icon={<FiExternalLink />}
                    value="BGG Page"
                    className="hover:bg-slate-600"
                  />
                </a>
                <div className="flex items-center">
                  <CopyURLButton />
                </div>
              </div>

              <GameDescription description={gameDetails.description.text} />
            </>
          )}
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
