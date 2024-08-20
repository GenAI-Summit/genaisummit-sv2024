"use client";

import { motion } from "framer-motion";

const SectionEnter = ({ children }) => (
  <motion.div
    className="w-full h-full"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default SectionEnter;
