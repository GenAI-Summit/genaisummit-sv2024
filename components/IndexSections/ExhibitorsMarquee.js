"use client";

import React from "react";
import Image from "next/image";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import useMarquee from "@/hooks/useMarquee";
import { HorizontalTicker } from "react-infinite-ticker";

const ExhibitorsMarquee = () => {
  const { exhibitors, speakers, isLoading, isError } = useMarquee();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <HorizontalTicker duration={30000}>
      {exhibitors?.map((exhibitor) => (
        <div
          key={exhibitor.id}
          className="w-36 h-12 md:w-64 md:h-20"
        >
          <div className="w-12 h-12 md:w-20 md:h-20">
            <Image
              src={exhibitor.logo}
              alt={exhibitor.name}
              width={300}
              height={300}
              loading="lazy"
            />
          </div>
        </div>
      ))}
      {speakers?.map((speaker) => (
        <div
          key={speaker.id}
          className="w-52 h-12 md:w-80 md:h-20 flex justify-between items-center gap-4"
        >
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden">
            <Image
              src={speaker.avatar}
              alt={speaker.name}
              width={300}
              height={300}
              loading="lazy"
            />
          </div>
          <div className="flex-grow text-[11px] md:text-sm text-theme1Dark1 flex flex-col gap-1 md:gap-2 items-start">
            <p>{speaker.name}</p>
            <p>{speaker.organization}</p>
          </div>
        </div>
      ))}
      <div className="w-64 md:w-80 text-theme1Dark1 text-sm md:text-base font_monaspace_neon flex items-center">
        <span className="font-bold">Job Fair: </span>
        <span> 100+ Companies</span>
      </div>
    </HorizontalTicker>
  );
};

export default ExhibitorsMarquee;
