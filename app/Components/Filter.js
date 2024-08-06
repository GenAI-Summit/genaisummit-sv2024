"use client";

import { useState } from "react";
import CheckBox from "./SVG/CheckBox";
import { WrapperArrowLeft, WrapperArrowDown } from "./SVG/WrapperArrows";

const Filter = ({ name, options, selected, onSelect }) => {
  const [isWrapperOpen, setIsWrapperOpen] = useState(false);

  const onClickWrapper = () => {
    setIsWrapperOpen(!isWrapperOpen);
  };

  return (
    <div className="flex flex-col gap-2 text-start text-color5">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onClickWrapper}
      >
        <h3 className="text-xl font-bold">{name}</h3>
        {isWrapperOpen ? <WrapperArrowDown /> : <WrapperArrowLeft />}
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
