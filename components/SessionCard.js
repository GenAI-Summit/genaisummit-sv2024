"use client";

import React from "react";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import CardLayout from "@/layouts/CardLayout";
import SpeakerCard from "@/components/SpeakerCard";
import { useRouter } from "next/navigation";
import HtmlToMarkdown from "@/components/HtmlToMarkdown";
import { formatToPTTime, formatToPTDate } from "@/lib/time";

const SessionCard = ({ session, showDesc = false }) => {
  const typeColorClass = getTypeColorClass(session.tag);
  const router = useRouter();

  const onSessionClick = () => {
    router.push(`/session/${session.id}`);
  };

  const openUrl = (time) => {
    const day = time.getDate();
    const month = time.getMonth() + 1;
    const year = time.getFullYear();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    window.open(`https://www.timeanddate.com/worldclock/fixedtime.html?day=${day}&month=${month}&year=${year}&hour=${hour}&min=${min}&sec=${sec}&p1=886`, "_blank");
  };

  return (
    <div className="w-full">
      <CardLayout bgColor="bg-theme1Dark3">
        <div className="flex flex-col items-start text-left text-theme1Light1 md:p-4 p-2 text-base md:text-lg">
          <div className="text-lg md:text-xl font-bold mb-4">
            <span className={`${typeColorClass} p-0.5 mr-4 rounded`}>
              <span>{session.tag}</span>
            </span>
            <span
              className="cursor-pointer hover:bg-gradient-to-br hover:from-theme1Color1 hover:via-theme1Color2 hover:to-theme1Color3 hover:bg-clip-text hover:text-transparent ease-in-out duration-300 leading-8 md:leading-10"
              onClick={onSessionClick}
            >
              {session.name}
            </span>
          </div>
          <p className="mb-4 cursor-pointer hover:bg-gradient-to-br hover:from-theme1Color1 hover:via-theme1Color2 hover:to-theme1Color3 hover:bg-clip-text hover:text-transparent ease-in-out duration-300" onClick={() => openUrl(session.start)}>
            {formatToPTTime(session.start)}
            {" - "}
            {formatToPTTime(session.end)}
            {" | "}
            {formatToPTDate(session.start)}
          </p>
          <p className="mb-4">{session.location}</p>
          {session.moderators.length > 0 && (
            <div className="mb-2">
              <div className="font-semibold mb-4">
                Moderator{session.moderators.length > 1 ? "s" : ""}:
              </div>
              <div className="flex flex-wrap items-center gap-8">
                {session.moderators.map((moderator) => (
                  <div key={moderator.id} className="flex gap-4 items-center">
                    <div className="w-24 text-[7px]">
                      <SpeakerCard key={moderator.id} speaker={moderator} />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <p className="text-sm font-bold">{moderator.name}</p>
                      {moderator.title && (
                        <p className="text-xs">{moderator.title}</p>
                      )}
                      {moderator.organization && (
                        <p className="text-xs">@{moderator.organization}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {session.speakers.length > 0 && (
            <div className="mb-4">
              <div className="font-semibold mb-4">
                Speaker{session.speakers.length > 1 ? "s" : ""}:
              </div>
              <div className="flex flex-wrap items-center gap-8">
                {session.speakers.map((speaker) => (
                  <div key={speaker.id} className="flex gap-4 items-center">
                    <div className="w-24 text-[7px]">
                      <SpeakerCard key={speaker.id} speaker={speaker} />
                    </div>
                    <div className="ml-3 flex flex-col items-start justify-center gap-y-3">
                      <p className="text-sm font-bold">{speaker.name}</p>
                      {speaker.title && (
                        <p className="text-xs">{speaker.title}</p>
                      )}
                      {speaker.organization && (
                        <p className="text-xs">@{speaker.organization}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {showDesc && (
            <div className="mt-4 text-base md:text-lg">
              <Suspense fallback={<Loader />}>
                <HtmlToMarkdown html={session.desc} />
              </Suspense>
            </div>
          )}
        </div>
      </CardLayout>
    </div>
  );
};

const getTypeColorClass = (type) => {
  switch (type) {
    case "Keynote":
      return "bg-colorSessionType1 text-white";
    case "Panel":
      return "bg-colorSessionType2 text-white";
    case "Seminar":
      return "bg-colorSessionType3 text-white";
    case "Workshop":
      return "bg-colorSessionType4 text-white";
    case "Startup Demo":
      return "bg-colorSessionType5 text-white";
    case "Fireside Chat":
      return "bg-colorSessionType6 text-white";
    default:
      return "bg-colorSessionType7 text-white";
  }
};

export default SessionCard;
