"use client";

import { useState } from "react";
import Image from "next/image";

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
              <div
                key={index}
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => onSelect(option)}
              >
                {selected.includes(option) ? (
                  <Image
                    src="/images/icons/checkbox_checked.svg"
                    alt="checked"
                    width={30}
                    height={30}
                  />
                ) : (
                  <Image
                    src="/images/icons/checkbox.svg"
                    alt="unchecked"
                    width={30}
                    height={30}
                  />
                )}
                <div className="text-lg">{option}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;
