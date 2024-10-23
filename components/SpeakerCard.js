"use client";

import { useState } from "react";
import Image from "next/image";
import Drawer from "@/components/Drawer";
import SpeakerDetail from "@/components/SpeakerDetail";
import { useRouter } from "next/navigation";
import TextHover from "@/motions/TextHover";

const SpeakerCard = ({ speaker }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const openDrawer = () => {
    window?.umami.track(`Click ${speaker.name}`);
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
        className="w-full h-auto cursor-pointer overflow-hidden"
        onClick={openDrawer}
      >
        <Image
          src={speaker.avatar}
          alt={speaker.name}
          width={300}
          height={300}
          loading="lazy"
        />
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <div className="max-h-[85%] w-full">
          <SpeakerDetail speaker={speaker} />
        </div>
        <div
          className="mt-2 cursor-pointer font-medium flex justify-start items-center"
          onClick={onSpeakerDetail}
        >
          <TextHover
            text={`All Sessions by ${speaker.name}`}
            color="theme1Light1"
          />
        </div>
      </Drawer>
    </>
  );
};

export default SpeakerCard;
