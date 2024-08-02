"use client";

import React, { useState } from "react";
import Image from "next/image";
import Drawer from "./Drawer";
import SpeakerDetail from "./SpeakerDetail";
import { useRouter } from "next/navigation";

const SpeakerCard = ({ speaker }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const onSpeakerDetail = () => {
    router.push(`/speaker/${speaker.id}`);
  };

  return (
    <>
      <div
        className="w-full h-auto cursor-pointer rounded-full overflow-hidden"
        onClick={openDrawer}
      >
        <Image
          src={speaker.avatar}
          alt={speaker.name}
          width={400}
          height={400}
          loading="lazy"
        />
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <SpeakerDetail speaker={speaker} />
        <div>
          <span
            className="mt-2 cursor-pointer text-base font-medium ease-in-out duration-300 border-b-2 border-transparent hover:border-color1"
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

/*
<div
  className="w-full h-auto group relative bg-color7 text-color5 border-2 border-color3 cursor-pointer hover:border-color1 ease-in-out duration-300 overflow-hidden"
  onClick={openDrawer}
>
  <Image
    src={speaker.avatar}
    alt={speaker.name}
    width={400}
    height={400}
    loading="lazy"
  />
  <div className="absolute bottom-0 w-full bg-color3 text-color2 bg-opacity-80 p-0.5 text-center transform group-hover:translate-y-full transition-transform duration-300 ease-in-out">
    <div className="font-bold">{speaker.name}</div>
  </div>
  <div className="absolute bottom-0 w-full bg-color2 text-color3 bg-opacity-80 p-0.5 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
    {speaker.title && <div className="font-medium">{speaker.title}</div>}
    {speaker.organization && (
      <div className="font-medium">@{speaker.organization}</div>
    )}
  </div>
</div>
*/
