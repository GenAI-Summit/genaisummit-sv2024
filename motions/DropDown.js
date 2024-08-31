"use client";

import { motion, AnimatePresence } from "framer-motion";

const DropDown = ({ children, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.7, type: "spring", ease: "linear" }}
          className="w-full h-full overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropDown;
