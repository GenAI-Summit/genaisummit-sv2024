"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../Logo";

const AttendeesCarousel = ({ attendeesArray }) => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!attendeesArray) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev === attendeesArray.length - 1 ? 0 : prev + 1));
        setIsTransitioning(false);
      }, 1000);
    }, 15000);

    return () => clearInterval(timer);
  }, [attendeesArray]);

  if (!attendeesArray) {
    return null;
  }

  return (
    <>
      {attendeesArray[index].map((item) => (
        <Link
          key={item.id}
          className={`w-[23%] h-24 md:w-[23%] md:h-28 lg:w-[15%] lg:h-32 bg-theme1Gray3 cursor-pointer border-2 border-theme1Gray3 ease-in-out duration-300 hover:border-theme1Gray2 rounded-lg shadow-md transition-opacity duration-1000 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
          href={item.url}
          target="_blank"
        >
          <Logo src={item.logo} alt={item.name} />
        </Link>
      ))}
    </>
  );
};

export default AttendeesCarousel;
