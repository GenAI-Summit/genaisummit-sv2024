"use client";

import { useEffect, useState } from "react";
import TicketBtn from "./Button/TicketBtn";

const FloatFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);
  return (
    <div
      className={`
    fixed bottom-2 w-[95%] text-color6 pt-[2.5px] bg-gradient-to-r from-color1 to-color2 shadow-lg rounded-lg md:hidden z-30 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="bg-color13 z-40 px-4 py-2 flex justify-between items-center">
        <span className="font-semibold">$99 – $1099</span>
        <TicketBtn
          mode="day"
          fill={true}
          url="https://whova.com/portal/registration/genai_202405/"
        />
      </div>
    </div>
  );
};

export default FloatFooter;
