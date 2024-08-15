"use client";

import React from "react";
import CardLayout from "../Layouts/CardLayout";
import SpeakerCard from "./SpeakerCard";
import { useRouter } from "next/navigation";
import ParsedHtml from "./ParsedHtml";

const SessionCard = ({ session, showDesc = false }) => {
  const typeColorClass = getTypeColorClass(session.tag);
  const router = useRouter();

  const onSessionClick = () => {
    router.push(`/session/${session.id}`);
  };

  return (
    <div className="w-full">
      <CardLayout>
        <div className="flex flex-col items-start text-left text-color6 md:p-4 p-2">
          <div className="text-xl font-bold mb-4">
            <span className={`${typeColorClass} p-0.5 mr-4 rounded`}>
              <span>{session.tag}</span>
            </span>
            <span
              className="cursor-pointer hover:bg-gradient-to-br hover:from-color1 hover:to-color2 hover:bg-clip-text hover:text-transparent ease-in-out duration-300 leading-10"
              onClick={onSessionClick}
            >
              {session.name}
            </span>
          </div>
          <p className="mb-4">
            {session.start.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            {" - "}
            {session.end.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            {" | "}
            {session.start.toLocaleDateString()}
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
            <div className="mt-4 text-lg md:text-xl">
              <ParsedHtml html={session.desc} />
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
