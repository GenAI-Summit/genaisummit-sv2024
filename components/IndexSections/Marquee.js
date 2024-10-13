"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import useMarquee from "@/hooks/useMarquee";
import { HorizontalTicker } from "react-infinite-ticker";

const Marquee = () => {
  const { organizations, speakers, isLoading, isError } = useMarquee();

  const randomizedItems = useMemo(() => {
    if (!organizations || !speakers) return [];

    // Triple the organizations
    const tripledOrganizations = organizations.flatMap(org => [org, org, org]);

    // Combine and shuffle the items
    const combined = [...tripledOrganizations, ...speakers];
    return combined.sort(() => Math.random() - 0.5);
  }, [organizations, speakers]);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <HorizontalTicker duration={30000}>
      {randomizedItems.map((item) => (
        item.title ? (
          <div
            key={`speaker-${item.id}-${Math.random()}`}
            className="w-52 h-12 md:w-80 md:h-20 flex justify-between items-center gap-4"
          >
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden">
              <Image
                src={item.avatar}
                alt={item.name}
                width={300}
                height={300}
                loading="lazy"
              />
            </div>
            <div className="flex-grow text-[11px] md:text-sm text-theme1Dark1 flex flex-col gap-1 md:gap-2 items-start">
              <p>{item.name}</p>
              <p>{item.title}</p>
            </div>
          </div>
        ) : (
          <div
            key={`org-${item.id}-${Math.random()}`}
            className="w-36 h-12 md:w-64 md:h-20"
          >
            <div className="w-12 h-12 md:w-20 md:h-20">
              <Image
                src={item.logo}
                alt={item.name}
                width={300}
                height={300}
                loading="lazy"
              />
            </div>
          </div>
        )
      ))}
      <div className="w-64 md:w-80 text-theme1Dark1 text-sm md:text-base font_monaspace_neon flex items-center">
        <span className="font-bold">Job Fair:{" "}</span>
        <span> 100+ Companies</span>
      </div>
    </HorizontalTicker>
  );
};

export default Marquee;
