"use client";

import { useState } from "react";
import CheckBox from "./SVG/CheckBox";
import WrapperArrow from "./SVG/WrapperArrow";

const Filter = ({ name, options, selected, onSelect }) => {
  const [isWrapperOpen, setIsWrapperOpen] = useState(false);

  const onClickWrapper = () => {
    setIsWrapperOpen(!isWrapperOpen);
  };

  return (
    <div
      className={`flex flex-col gap-2 text-start ${isWrapperOpen ? "text-color2" : "text-color5"}`}
    >
      <div
        className="flex items-center justify-between cursor-pointer ease-in-out transition-all duration-300 hover:text-color2"
        onClick={onClickWrapper}
      >
        <h3 className="text-xl font-bold">{name}</h3>
        <WrapperArrow isOpen={isWrapperOpen} />
      </div>
      {isWrapperOpen && (
        <div className="flex flex-col gap-2">
          {options.map((option, index) => {
            return (
              <div key={index} onClick={() => onSelect(option)}>
                <CheckBox checked={selected.includes(option)} label={option} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;
