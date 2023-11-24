"use client";

import { useState } from "react";
import { Game } from "~api";
import { Button } from "~app/components";
import { GameCard } from "~app/collection/components/game-list/components";

type Props = {
  collection?: Game[];
};

export const Randomizer: React.FC<Props> = ({ collection }) => {
  const [chosenGame, setChosenGame] = useState<Game>();

  if (!collection?.length) {
    return null;
  }

  const chooseRandomGame = () => {
    const randomGame =
      collection[Math.floor(Math.random() * collection.length)];

    setChosenGame(randomGame);
  };

  const numberOfGames = Number(collection.length).toLocaleString();

  return (
    <div className="pt-4 space-y-12 flex flex-col items-center text-center">
      <h2 className="text-xl">
        We&apos;ll pick from your collection of{" "}
        <span className="rounded px-1 font-bold text-2xl bg-gradient-to-r from-rose-400 to-violet-700">
          {numberOfGames}
        </span>{" "}
        games.
      </h2>

      <div>
        <Button onClick={chooseRandomGame}>FEED ME 🍝</Button>
      </div>
      <div>
        <GameCard game={chosenGame} enableSpinAnimation />
      </div>
    </div>
  );
};
