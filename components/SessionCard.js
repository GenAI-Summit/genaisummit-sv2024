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
        <div className="flex flex-col items-start gap-y-2 text-left text-theme1Light1 text-sm md:text-base">
          <div className="text-base md:text-lg font-semibold">
            <span className={`${typeColorClass} p-0.5 mr-2 rounded`}>
              <span>{session.tag}</span>
            </span>
            <span
              className="cursor-pointer hover:bg-gradient-to-br hover:from-theme1Color1 hover:via-theme1Color2 hover:to-theme1Color3 hover:bg-clip-text hover:text-transparent ease-in-out duration-300 leading-4 md:leading-8"
              onClick={onSessionClick}
            >
              {session.name}
            </span>
          </div>
          <p>
            <span>{session.location ? session.location : "TBD"}</span>
            {" | "}
            <span
              className="cursor-pointer hover:bg-gradient-to-br hover:from-theme1Color1 hover:via-theme1Color2 hover:to-theme1Color3 hover:bg-clip-text hover:text-transparent ease-in-out duration-300"
              onClick={() => openUrl(session.start)}
            >
              {formatToPTTime(session.start)}
              {" - "}
              {formatToPTTime(session.end)}
              {" | "}
              {formatToPTDate(session.start)}
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {session.moderators.length > 0 && (
              <>
                {session.moderators.map((moderator) => (
                  <div key={moderator.id} className="flex gap-2 items-start">
                    <div className="w-16">
                      <SpeakerCard key={moderator.id} speaker={moderator} />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-y-1">
                      <p className="text-xs font-semibold">{moderator.name}</p>
                      <p className="text-xs">Moderator</p>
                      {moderator.title && (
                        <p className="text-xs">{moderator.title}</p>
                      )}
                      {moderator.organization && (
                        <p className="text-xs">@{moderator.organization}</p>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
            {session.speakers.length > 0 && (
              <>
                {session.speakers.map((speaker) => (
                  <div key={speaker.id} className="flex gap-2 items-start">
                    <div className="w-16">
                      <SpeakerCard key={speaker.id} speaker={speaker} />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-y-1">
                      <p className="text-xs font-semibold">{speaker.name}</p>
                      {speaker.title && (
                        <p className="text-xs">{speaker.title}</p>
                      )}
                      {speaker.organization && (
                        <p className="text-xs">@{speaker.organization}</p>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          {showDesc && (
            <div className="text-base md:text-lg">
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
