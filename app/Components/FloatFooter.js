"use client";

import { useEffect, useState } from "react";
import TicketBtn from "./TicketBtn";

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
    fixed bottom-0 w-full bg-color5 text-color7 p-4 shadow-lg md:hidden flex justify-between items-center z-40 border-t-2 border-color1 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <span className="font-bold">$99 – $1099</span>
      <TicketBtn />
    </div>
  );
};

export default FloatFooter;
