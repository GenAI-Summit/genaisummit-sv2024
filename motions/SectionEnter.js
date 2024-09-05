"use client";

import { motion } from "framer-motion";

const SectionEnter = ({ children }) => (
  <motion.div
    className="w-full h-full"
    initial={{ opacity: 0, rotateX: 20 }}
    animate={{ opacity: 1, rotateX: 0 }}
    transition={{
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1],
      opacity: { duration: 0.4 },
      rotateX: { duration: 0.7 }
    }}
  >
    {children}
  </motion.div>
);

export default SectionEnter;
