"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Add this custom hook at the top of the file
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const LogoDrop = ({ logoSrc, count = 20 }) => {
  const [logos, setLogos] = useState([]);
  const { width: windowWidth } = useWindowSize();

  // Calculate logo size based on window width
  const logoSize = Math.max(50, Math.min(200, windowWidth / 10));

  useEffect(() => {
    const newLogos = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      animationDelay: `${Math.random() * 2}s`,
    }));
    setLogos(newLogos);
  }, [count]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {logos.map((logo) => (
        <Image
          key={logo.id}
          src={logoSrc}
          alt="Falling Logo"
          width={logoSize}
          height={logoSize}
          className="absolute -top-[50px]"
          style={{
            left: logo.left,
            animation: `fall ${logo.animationDuration} linear ${logo.animationDelay} infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(50px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoDrop;