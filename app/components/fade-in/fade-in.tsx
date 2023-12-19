import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export const FadeIn: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.9 },
      }}
    >
      {children}
    </motion.div>
  );
};
