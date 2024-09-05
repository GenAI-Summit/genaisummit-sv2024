"use client";

import { motion, AnimatePresence } from "framer-motion";

const DrawerEnter = ({ isOpen, children }) => {
  const variants = {
    closed: { 
      x: "100%",
      opacity: 0,
      scale: 0.98,
      rotateY: 10,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
    },
    open: { 
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      boxShadow: "-10px 0px 30px rgba(0, 0, 0, 0.15)"
    },
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
            stiffness: 300,
            damping: 25,
            mass: 0.8,
            duration: 0.5,
          }}
          className="w-full h-full overflow-hidden origin-right"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DrawerEnter;
