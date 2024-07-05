"use client";

import React, { useState } from "react";
import Image from "next/image";
import Drawer from "./Drawer";
import SpeakerDetail from "./SpeakerDetail";

const SpeakerCard = ({ speaker }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div
        className="group relative h-auto w-44 md:w-44 md:h-auto bg-white border-2 border-white hover:border-sky-500 ease-in-out duration-300 overflow-hidden"
        onClick={openDrawer}
      >
        <Image
          src={speaker.image}
          alt={speaker.name}
          width={200}
          height={200}
          loading="lazy"
        />
        <div className="absolute bottom-0 w-full bg-white bg-opacity-80 p-0.5 text-center transform group-hover:translate-y-full transition-transform duration-300 ease-in-out">
          <div className="font-bold">{speaker.name}</div>
        </div>
        <div className="absolute bottom-0 w-full bg-white bg-opacity-80 p-0.5 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          {speaker.title && <div className="font-medium">{speaker.title}</div>}
          {speaker.company && (
            <div className="font-medium">@{speaker.company}</div>
          )}
        </div>
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <SpeakerDetail speaker={speaker} />
      </Drawer>
    </>
  );
};

export default SpeakerCard;
