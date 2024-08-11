"use client";

import { motion, AnimatePresence } from "framer-motion";

const MenuDropDown = ({ children, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden flex flex-col text-center justify-center overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuDropDown;
