"use client";

import React, { useState } from "react";
import Image from "next/image";
import Drawer from "./Drawer";
import SpeakerDetail from "./SpeakerDetail";
import { useRouter } from "next/navigation";

const SpeakerCard = ({ speaker, width = "w-36", textSize = "text-[12px]" }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const onSpeakerDetail = () => {
    router.push(`/speakers/${speaker.id}`);
  };

  return (
    <>
      <div
        className={`${width} ${textSize} group relative h-auto md:h-auto bg-white border-2 border-white cursor-pointer hover:border-sky-500 ease-in-out duration-300 overflow-hidden`}
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
        <div>
          <span
            className="mt-2 cursor-pointer font-medium ease-in-out duration-300 border-b-2 border-transparent hover:border-sky-500"
            onClick={onSpeakerDetail}
          >
            All Sessions by {speaker.name}
          </span>
        </div>
      </Drawer>
    </>
  );
};

export default SpeakerCard;
