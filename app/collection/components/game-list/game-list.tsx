import { motion } from "framer-motion";
import { Game } from "~api";
import { GameCard } from "./components";

type Props = {
  collection?: Game[];
};

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
  if (!collection?.length) {
    return null;
  }

  return (
    <div className="pt-8">
      <motion.ul
        variants={motionContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-4"
      >
        {collection.map((game) => (
          <GameCard key={game.name.text} game={game} />
        ))}
      </motion.ul>
    </div>
  );
};
