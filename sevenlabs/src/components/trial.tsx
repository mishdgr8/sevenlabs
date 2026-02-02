import React from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TrialProps {
  text: string;
  solana: ReactNode;
}

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Trial = ({ text, solana }: TrialProps): React.JSX.Element => {
  return (
    <div className="w-full">
      <div className="flex w-full h-fit flex-col items-center justify-between py-0 px-12 ">
        <motion.div
          className="text-center font-extrabold
      text-6xl mt-48 mb-8  items-center justify-between uppercase leading-[4rem]"
          variants={quote}
          initial="initial"
          animate="animate"
        >
          <motion.p variants={quote} initial="initial" animate="animate">
            {text}
          </motion.p>
          <p>{solana}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Trial;
