import Image from "next/image";
import { motion } from "framer-motion";
import { Game } from "~api";

const hidden = { opacity: 0, scale: 0 };
const visible = {
  opacity: 1,
  scale: 1,
  rotate: 360,
};

const motionItem = {
  hidden,
  visible,
};

type Props = {
  game?: Game;
};

export const GameCard: React.FC<Props> = ({ game }) => {
  if (!game) {
    return null;
  }

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
      className="w-full gap-4 flex md:flex-col items-center md:justify-center md:text-center p-4 backdrop-blur-[2px] border-2 border-slate-700 rounded"
    >
      <Image
        src={game.image.text}
        alt={game.name.text}
        className="w-24 border border-slate-500 rounded"
        width={96}
        height={96}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsY/jfBwAEjgINT3lokAAAAABJRU5ErkJggg=="
      />
      <div>
        <div>{game.name.text}</div>
        <div className="text-slate-400">{game.yearpublished.text}</div>
      </div>
    </motion.li>
  );
};
