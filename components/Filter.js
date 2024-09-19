"use client";

import { useState } from "react";
import CheckBox from "@/components/SVG/CheckBox";
import WrapperArrow from "@/components/SVG/WrapperArrow";
import { motion, AnimatePresence } from "framer-motion";

const Filter = ({ name, options, selected, onSelect }) => {
  const [isWrapperOpen, setIsWrapperOpen] = useState(false);

  const onClickWrapper = () => {
    setIsWrapperOpen(!isWrapperOpen);
  };

  return (
    <div className="flex flex-col gap-2 text-start text-theme1Light1">
      <div
        className="flex items-center justify-between cursor-pointer group"
        onClick={onClickWrapper}
      >
        <span
          className={`text-xl font-semibold ${isWrapperOpen ? "bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text text-transparent" : "text-theme1Light1"} group-hover:bg-gradient-to-br group-hover:from-theme1FilterTitleColor1 group-hover:via-theme1FilterTitleColor2 group-hover:to-theme1FilterTitleColor3 group-hover:bg-clip-text group-hover:text-transparent ease-in-out transition-all duration-300`}
        >
          {name}
        </span>
        <WrapperArrow isOpen={isWrapperOpen} />
      </div>
      <AnimatePresence>
        {isWrapperOpen && (
          <motion.div
            className="flex flex-col gap-3 my-2 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                onClick={() => onSelect(option)}
              >
                <CheckBox
                  checked={selected.includes(option)}
                  label={option}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filter;
