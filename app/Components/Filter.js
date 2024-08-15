"use client";

import { useState } from "react";
import CheckBox from "./SVG/CheckBox";
import WrapperArrow from "./SVG/WrapperArrow";
import DropDown from "../Motions/DropDown";

const Filter = ({ name, options, selected, onSelect }) => {
  const [isWrapperOpen, setIsWrapperOpen] = useState(false);

  const onClickWrapper = () => {
    setIsWrapperOpen(!isWrapperOpen);
  };

  return (
    <div className="flex flex-col gap-2 text-start">
      <div
        className="flex items-center justify-between cursor-pointer group"
        onClick={onClickWrapper}
      >
        <span
          className={`text-xl font-semibold ${isWrapperOpen ? "bg-gradient-to-br from-color1 to-color2 bg-clip-text text-transparent" : "text-color6"} group-hover:bg-gradient-to-br group-hover:from-color1 group-hover:to-color2 group-hover:bg-clip-text group-hover:text-transparent ease-in-out transition-all duration-300`}
        >
          {name}
        </span>
        <WrapperArrow isOpen={isWrapperOpen} />
      </div>
      {isWrapperOpen && (
        <DropDown isOpen={isWrapperOpen}>
          <div className="flex flex-col gap-3 my-2">
            {options.map((option, index) => {
              return (
                <div key={index} onClick={() => onSelect(option)}>
                  <CheckBox
                    checked={selected.includes(option)}
                    label={option}
                  />
                </div>
              );
            })}
          </div>
        </DropDown>
      )}
    </div>
  );
};

export default Filter;
