import { useCallback, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { useToggle } from "usehooks-ts";
import { twMerge as tw } from "tailwind-merge";
import { Game } from "~api";
import { ToggleGroup, Button } from "~app/components";
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
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [showSearch, toggleShowSearch] = useToggle(false);

  useEffect(() => {
    if (showSearch) {
      inputRef?.current?.focus();
    }
  }, [showSearch]);

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
    <div className="pt-8 w-full">
      <div className="flex gap-4 flex-wrap">
        <ToggleGroup<SortingValue>
          value={sortingValue}
          onValueChange={(value) => setSortingValue(value)}
          items={[
            { content: "Aa", value: SortingValue.ALPHABETICAL },
            { content: "Year", value: SortingValue.YEAR },
          ]}
        />
        <Button palette="secondary" onClick={() => toggleShowSearch()}>
          <FiSearch />
        </Button>
        <input
          ref={inputRef}
          placeholder="Search your collection"
          className={tw(
            "w-full sm:w-0 h-0 sm:h-[52px] px-4 sm:px-0 border-0 flex-grow-1 rounded placeholder-slate-400 bg-slate-800  border-slate-700 transition-all duration-200",
            showSearch && "sm:w-80 h-[52px] sm:px-4 border-2"
          )}
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
        />
      </div>
      <motion.ul
        variants={motionContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-4"
      >
        {sortCollection()
          ?.filter((game) =>
            game.name.text.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((game) => (
            <GameCard key={game.name.text} game={game} />
          ))}
      </motion.ul>
    </div>
  );
};
