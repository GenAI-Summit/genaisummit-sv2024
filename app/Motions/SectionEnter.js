"use client";

import { motion } from "framer-motion";

const SectionEnter = ({ children }) => (
  <motion.div
    className="w-full h-full"
    initial={{
      opacity: 0,
      x: Math.floor(Math.random() * 2) === 0 ? -100 : 100,
    }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default SectionEnter;
