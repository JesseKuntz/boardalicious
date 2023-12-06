import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "~utils/routes";
import { Game } from "~api";
import { GAME_KEY } from "~app/components/game-details-modal";
import { GameImage } from "./components";

type Props = {
  game?: Game;
  enableSpinAnimation?: boolean;
};

export const GameCard: React.FC<Props> = ({ game, enableSpinAnimation }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  if (!game) {
    return null;
  }

  const hidden = { opacity: 0, scale: 0 };
  const visible = {
    opacity: 1,
    scale: 1,
    ...(enableSpinAnimation ? { rotate: 360 } : {}),
  };

  const motionItem = {
    hidden,
    visible,
  };

  return (
    <motion.li
      initial={hidden}
      animate={visible}
      key={game.name.text}
      variants={motionItem}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      className="w-full gap-4 flex md:flex-col items-center md:justify-center text-left md:text-center p-4 backdrop-blur-[2px] border-2 border-slate-700 rounded hover:bg-slate-800 h-full cursor-pointer"
      onClick={() => {
        router.push(
          `${pathname}?${createQueryString({
            key: GAME_KEY,
            value: game.attributes.objectid,
            searchParams,
          })}`,
          { scroll: false }
        );
      }}
    >
      <GameImage src={game.image.text} alt={game.name.text} />
      <div>
        <div>{game.name.text}</div>
        <div className="text-slate-400">{game.yearpublished.text}</div>
      </div>
    </motion.li>
  );
};
