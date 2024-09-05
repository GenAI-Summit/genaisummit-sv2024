"use client";

import { motion } from "framer-motion";

const ModalEnter = ({ children }) => (
  <motion.div
    className="w-full h-full flex flex-col justify-center items-center"
    initial={{ opacity: 0, rotateX: 90, y: -50 }}
    animate={{ opacity: 1, rotateX: 0, y: 0 }}
    transition={{
      duration: 0.5,
      ease: "easeOut",
      opacity: { duration: 0.3 },
      rotateX: {
        type: "spring",
        damping: 15,
        stiffness: 150
      }
    }}
  >
    {children}
  </motion.div>
);

export default ModalEnter;
