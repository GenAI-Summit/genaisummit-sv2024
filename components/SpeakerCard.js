"use client";

import { useState } from "react";
import Image from "next/image";
import Drawer from "@/components/Drawer";
import SpeakerDetail from "@/components/SpeakerDetail";
import { useRouter } from "next/navigation";
import TextHover from "@/motions/TextHover";
import { useAudioContext } from "@/hooks/useAudio";

const SpeakerCard = ({ speaker }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const { setActiveAudioId, setAudioUrl, setTitle } = useAudioContext();

  const openDrawer = () => {
    window?.umami.track(`Click ${speaker.name}`);
    setIsDrawerOpen(true);
  };
  const openAudio = (url) => {
    setActiveAudioId(speaker.id);
    setAudioUrl(url);
    setTitle(speaker.name);
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
        className="w-full h-auto cursor-pointer overflow-hidden relative"
        onClick={openDrawer}
      >
        <Image
          src={speaker.avatar}
          alt={speaker.name}
          width={300}
          height={300}
          loading="lazy"
        />
        {speaker.socials.instagram &&
          speaker.socials.instagram.startsWith("https://www.instagram.com") && (
          <Image
            className="absolute top-0 right-0 cursor-pointer"
            src="/images/icons/podcast_light.svg"
            alt="sound"
            width={30}
            height={30}
            loading="lazy"
            onClick={(e) => {
              e.stopPropagation();
              openAudio(
                speaker.socials.instagram.replace(
                  "https://www.instagram.com",
                  "https://github.com",
                ),
              );
            }}
          />
        )}
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
