"use client";

import { useState, useEffect } from "react";
import { PTtoUTC } from "@/lib/time";

const CountdownTimer = ({ time }) => {
  const [mounted, setMounted] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setMounted(true);
    const calculateInitialSeconds = () => {
      return Math.max(0, Math.floor((PTtoUTC(time) - new Date()) / 1000));
    };
    setSeconds(calculateInitialSeconds());

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;

  const textColor =
    "bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text text-transparent";

  if (!mounted) {
    return null;
  }

  return (
    <div className="text-lg md:text-4xl lg:text-6xl font-monaspace_neon">
      <span className={textColor}>{days}</span>
      <span className="text-sm md:text-lg lg:text-2xl"> Days </span>
      <span className={textColor}>{hours}</span>
      <span className="text-sm md:text-lg lg:text-2xl"> Hours </span>
      <span className={textColor}>{minutes}</span>
      <span className="text-sm md:text-lg lg:text-2xl"> Minutes </span>
      <span className={textColor}>{sec}</span>
      <span className="text-sm md:text-lg lg:text-2xl"> Seconds</span>
    </div>
  );
};

export default CountdownTimer;
