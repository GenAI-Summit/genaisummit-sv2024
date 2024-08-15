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
    fixed bottom-4 w-[95%] bg-color13 text-color6 px-4 py-2 shadow-lg rounded-lg md:hidden flex justify-between items-center z-40 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <span className="font-semibold">$99 – $1099</span>
      <TicketBtn mode="day" fill={true} />
    </div>
  );
};

export default FloatFooter;
