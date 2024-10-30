"use client";

import { useState } from "react";
import Image from "next/image";
import Drawer from "@/components/Drawer";
import SpeakerDetail from "@/components/SpeakerDetail";
import { useRouter } from "next/navigation";
import TextHover from "@/motions/TextHover";
import { useAudioContext } from "@/hooks/useAudio";
import umamiTrack from "@/lib/umamiTrace";

const SpeakerCard = ({ speaker }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const { setActiveAudioId, setAudioUrl, setTitle } = useAudioContext();
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [longPressTimer, setLongPressTimer] = useState(null);

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

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    
    const timer = setTimeout(() => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const imageWidth = windowWidth < 768 ? 200 : 400;
      const imageHeight = windowWidth < 768 ? 200 : 400;
      const offset = windowWidth < 768 ? 10 : 20;

      setMousePosition({
        x: touch.clientX > windowWidth - (imageWidth + offset)
          ? touch.clientX - (imageWidth + offset)
          : touch.clientX + offset,
        y: touch.clientY > windowHeight - (imageHeight + offset)
          ? touch.clientY - (imageHeight + offset)
          : touch.clientY + offset,
      });
      setIsHovering(true);
    }, 100); // 500ms long press

    setLongPressTimer(timer);
  };

  const handleTouchEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
    
    // If we weren't showing the hover image, treat it as a click
    if (!isHovering) {
      openDrawer();
    }
    
    setIsHovering(false);
  };

  const handleTouchMove = () => {
    // Cancel long press if user moves their finger
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
    setIsHovering(false);
  };

  return (
    <>
      <div
        className="w-full h-auto cursor-pointer overflow-hidden relative"
        onClick={openDrawer}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        onMouseMove={(e) => {
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          const cursorX = e.clientX;
          const cursorY = e.clientY;
          const imageWidth = windowWidth < 768 ? 200 : 400;
          const imageHeight = windowWidth < 768 ? 200 : 400;
          const offset = windowWidth < 768 ? 10 : 20;

          setMousePosition({
            x: cursorX > windowWidth - (imageWidth + offset)
              ? cursorX - (imageWidth + offset)
              : cursorX + offset,
            y: cursorY > windowHeight - (imageHeight + offset)
              ? cursorY - (imageHeight + offset)
              : cursorY + offset,
          });
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <Image
          src={speaker.avatar}
          alt={speaker.name}
          width={500}
          height={500}
          loading="lazy"
        />
        {speaker.thoth && isHovering && (
          <div
            className="fixed pointer-events-none z-50"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          >
            <Image
              src={speaker.thoth}
              alt="Hover image"
              width={400}
              height={400}
              className="w-[200px] h-[200px] md:w-[400px] md:h-[400px]"
            />
          </div>
        )}
        {speaker.socials.instagram &&
          speaker.socials.instagram.startsWith("https://www.instagram.com") && (
          <Image
            className="absolute top-0 right-0 cursor-pointer"
            src="/images/icons/podcast.svg"
            alt="sound"
            width={30}
            height={30}
            loading="lazy"
            onClick={(e) => {
              e.stopPropagation();
              umamiTrack(`Click ${speaker.name} podcast`);
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
