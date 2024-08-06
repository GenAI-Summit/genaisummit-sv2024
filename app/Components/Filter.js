"use client";

import { useState } from "react";
import Image from "next/image";
import CheckBox from "./SVG/CheckBox";

const Filter = ({ name, options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-2 text-start text-color5">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-xl font-bold">{name}</h3>
        {isOpen ? (
          <Image
            src="/images/icons/arrow_down.svg"
            alt="up"
            width={20}
            height={20}
            onClick={onClick}
          />
        ) : (
          <Image
            src="/images/icons/arrow_left.svg"
            alt="down"
            width={20}
            height={20}
            onClick={onClick}
          />
        )}
      </div>
      {isOpen && (
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
