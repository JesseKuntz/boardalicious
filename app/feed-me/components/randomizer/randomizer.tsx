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

  return (
    <div className="pt-8 space-y-12 flex flex-col items-center text-center">
      <h2>{`We'll pick from your collection of ${Number(
        collection.length
      ).toLocaleString()} games.`}</h2>
      <div>
        <Button onClick={chooseRandomGame}>FEED ME 🍝</Button>
      </div>
      <div>
        <GameCard game={chosenGame} enableSpinAnimation />
      </div>
    </div>
  );
};
