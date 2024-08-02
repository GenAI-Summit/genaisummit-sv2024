"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollPosition / documentHeight) * 100;

      setIsVisible(scrollPosition > 1);
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circleRadius = 24;
  const circumference = 2 * Math.PI * circleRadius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button
      type="button"
      className={`fixed bottom-24 right-7 w-14 h-14 flex items-center justify-center rounded-full bg-color7 text-color1 shadow-md transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <span className="absolute inset-0 flex items-center justify-center">
        <svg width="52" height="52" className="rotate-[-90deg]">
          <circle
            cx="26"
            cy="26"
            r="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          ></circle>
        </svg>
      </span>
      <Image
        src="/images/icons/rocket.svg"
        alt="Rocket"
        width={24}
        height={24}
      />
    </button>
  );
};

export default BackToTopButton;
