"use client";

import React, { useState, useEffect } from "react";

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

  return (
    <div className="text-2xl md:text-6xl font-bold mb-4 font-monaspace_neon">
      <span className="text-color1">{days}</span>
      <span className="text-lg md:text-2xl"> Days </span>
      <span className="text-color1">{hours}</span>
      <span className="text-lg md:text-2xl"> Hours </span>
      <span className="text-color1">{minutes}</span>
      <span className="text-lg md:text-2xl"> Minutes </span>
      <span className="text-color1">{sec}</span>
      <span className="text-lg md:text-2xl"> Seconds</span>
    </div>
  );
};

export default CountdownTimer;
