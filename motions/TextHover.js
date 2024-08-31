"use client";

import { motion } from "framer-motion";

const TextHover = ({ text, color }) => {
  return (
    <motion.div
      className="relative inline"
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { color },
      }}
    >
      {text}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-${color}`}
        initial={{ scaleX: 0 }}
        variants={{
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default TextHover;
