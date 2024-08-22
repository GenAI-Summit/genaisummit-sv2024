"use client";

import { useState, useEffect } from "react";

const CountdownTimer = ({ time }) => {
  const [seconds, setSeconds] = useState(
    Math.floor((new Date(time) - new Date()) / 1000),
  );

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [seconds]);

  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;

  const textColor =
    "bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text text-transparent";

  return (
    <div className="text-2xl md:text-4xl lg:text-6xl font-monaspace_neon">
      <span className={textColor}>{days}</span>
      <span className="text-base md:text-lg lg:text-2xl"> Days </span>
      <span className={textColor}>{hours}</span>
      <span className="text-base md:text-lg lg:text-2xl"> Hours </span>
      <span className={textColor}>{minutes}</span>
      <span className="text-base md:text-lg lg:text-2xl"> Minutes </span>
      <span className={textColor}>{sec}</span>
      <span className="text-base md:text-lg lg:text-2xl"> Seconds</span>
    </div>
  );
};

export default CountdownTimer;
