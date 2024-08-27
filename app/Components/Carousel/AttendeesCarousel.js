"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const AttendeesCarousel = ({ attendeesArray }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!attendeesArray) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setVisibleIndex((prev) =>
          prev === attendeesArray.length - 1 ? 0 : prev + 1,
        );
        setIsTransitioning(false);
      }, 1000);
    }, 10000);

    return () => clearInterval(timer);
  }, [attendeesArray]);

  if (!attendeesArray) {
    return null;
  }

  return (
    <div className="w-full">
      {attendeesArray.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className={`flex flex-wrap justify-start items-center gap-y-3 md:gap-y-4 lg:gap-y-4 gap-x-[2%] md:gap-x-[2%] lg:gap-x-[1.5%] transition-opacity duration-1000 ${
            visibleIndex === groupIndex
              ? isTransitioning
                ? "opacity-0"
                : "opacity-100"
              : "hidden"
          }`}
        >
          {group.map((item) => (
            <Link
              key={item.id}
              className="w-[23%] md:w-[23%] lg:w-[15%] bg-theme1Gray3 cursor-pointer border-2 border-theme1Gray3 hover:border-theme1Gray2 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center p-2"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-full pt-[75%]">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  style={{ objectFit: "contain" }}
                  className="p-2"
                />
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AttendeesCarousel;
