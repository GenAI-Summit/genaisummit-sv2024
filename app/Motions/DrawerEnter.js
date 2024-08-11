"use client";

import { motion, AnimatePresence } from "framer-motion";

const DrawerEnter = ({ isOpen, children }) => {
  const variants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.2,
            mass: 1.2,
            damping: 12,
            ease: "easeIn",
          }}
          className="w-full h-full overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DrawerEnter;
