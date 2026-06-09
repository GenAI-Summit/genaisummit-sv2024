"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import useMarquee from "@/hooks/useMarquee";
import { HorizontalTicker } from "react-infinite-ticker";

const Marquee = () => {
  const { organizations, speakers, isLoading, isError } = useMarquee();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = 1000;

      setIsVisible(scrollPosition < threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const randomizedItems = useMemo(() => {
    if (!organizations || !speakers) return [];

    // Triple the organizations
    const tripledOrganizations = organizations.flatMap(org => [org]);

    // Combine and shuffle the items
    const combined = [...tripledOrganizations, ...speakers];
    return combined.sort(() => Math.random() - 0.5);
  }, [organizations, speakers]);

  if (isLoading || isError || !isVisible) {
    return null;
  }

  return (
    <HorizontalTicker duration={30000}>
      {randomizedItems.map((item, index) => (
        item.title ? (
          <div
            key={`speaker-${item.id}-${index}`}
            className="w-56 h-24 md:w-80 md:h-32 flex justify-between items-center gap-4"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 overflow-hidden flex-shrink-0">
              <Image
                src={item.avatar}
                alt={item.name}
                width={500}
                height={500}
                loading="eager"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex-grow text-[11px] md:text-base text-theme1Dark1 flex flex-col gap-1 md:gap-2 items-start">
              <p className="font-semibold">{item.name}</p>
              <p>{item.title}</p>
            </div>
          </div>
        ) : (
          <div
            key={`org-${item.id}-${index}`}
            className="w-36 h-24 md:w-64 md:h-32 flex items-center justify-center px-3 md:px-6"
          >
            <div className="h-16 w-full md:h-20 flex items-center justify-center">
              <Image
                src={item.logo}
                alt={item.name}
                width={240}
                height={120}
                loading="eager"
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>
        )
      ))}
      <div className="h-full w-64 md:w-80 text-theme1Dark1 text-base md:text-lg font_monaspace_neon flex flex-col items-start justify-center">
        <span className="font-semibold">Talent Network:{" "}</span>
        <span> 100+ Companies</span>
      </div>
    </HorizontalTicker>
  );
};

export default Marquee;
