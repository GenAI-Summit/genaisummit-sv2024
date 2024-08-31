"use client";

import { useState, useEffect } from "react";

const NumberRoller = ({ start, end, symbol }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      const d = start < end ? (end - start) / 150 : (start - end) / 150;
      setCount((prevCount) => {
        if (prevCount < end) {
          if (Math.abs(prevCount - end) < d) {
            return end;
          }
          return start < end
            ? Math.ceil(prevCount + d)
            : Math.floor(prevCount - d);
        }
        return prevCount;
      });
    }, 10);
    return () => clearInterval(interval);
  }, [start, end]);

  return <>{count === end ? count + `${symbol}` : count}</>;
};

export default NumberRoller;
