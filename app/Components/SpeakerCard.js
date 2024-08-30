"use client";

import { useState } from "react";
import Image from "next/image";
import Drawer from "./Drawer";
import SpeakerDetail from "./SpeakerDetail";
import { useRouter } from "next/navigation";
import TextHover from "../Motions/TextHover";

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
        <div
          className="mt-2 cursor-pointer font-medium"
          onClick={onSpeakerDetail}
        >
          <TextHover color="theme1Light1">
            All Sessions by {speaker.name}
          </TextHover>
        </div>
      </Drawer>
    </>
  );
};

export default SpeakerCard;
