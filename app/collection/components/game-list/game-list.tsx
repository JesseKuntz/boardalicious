import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Game } from "~api";
import { ToggleGroup } from "~app/components";
import { GameCard } from "./components";

type Props = {
  collection?: Game[];
};

enum SortingValue {
  ALPHABETICAL = "alphabetical",
  YEAR = "year",
}

const motionContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const GameList: React.FC<Props> = ({ collection }) => {
  const [sortingValue, setSortingValue] = useState(SortingValue.ALPHABETICAL);

  const sortCollection = useCallback(() => {
    return collection?.sort((a, b) => {
      if (sortingValue === SortingValue.ALPHABETICAL) {
        if (a.name.text < b.name.text) {
          return -1;
        } else if (a.name.text > b.name.text) {
          return 1;
        }

        return 0;
      }

      // If we're not sorting alphabetically, we'll sort by year.
      return Number(b.yearpublished.text) - Number(a.yearpublished.text);
    });
  }, [collection, sortingValue]);

  if (!collection?.length) {
    return null;
  }

  return (
    <div className="pt-8">
      <ToggleGroup<SortingValue>
        value={sortingValue}
        onValueChange={(value) => setSortingValue(value)}
        items={[
          { content: "Aa", value: SortingValue.ALPHABETICAL },
          { content: "Year", value: SortingValue.YEAR },
        ]}
      />
      <motion.ul
        variants={motionContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-4"
      >
        {sortCollection()?.map((game) => (
          <GameCard key={game.name.text} game={game} />
        ))}
      </motion.ul>
    </div>
  );
};
