"use client";

import React from "react";
import CardLayout from "../Layouts/CardLayout";
import SpeakerCard from "./SpeakerCard";
import AddToCalendarBtn from "./AddToCalendarBtn";
import { useRouter } from "next/navigation";

import parse from "html-react-parser";

const SessionCard = ({ session, showDesc = false }) => {
  const typeColorClass = getTypeColorClass(session.type);
  const router = useRouter();

  const onSessionClick = () => {
    router.push(`/session/${session.id}`);
  };

  return (
    <div className="w-full mt-4">
      <CardLayout>
        <div className="flex flex-col items-start text-left text-color5 md:px-3 md:py-2 p-1">
          <div className="text-xl font-bold">
            <span className={`${typeColorClass} p-0.5 mr-2 rounded`}>
              <span>{session.type}</span>
            </span>
            <span
              className="cursor-pointer hover:text-color1 ease-in-out duration-300"
              onClick={onSessionClick}
            >
              {session.topic}
            </span>
          </div>
          <p className="mb-1">
            {session.start.toLocaleTimeString()} -{" "}
            {session.end.toLocaleTimeString()} | {session.date}
          </p>
          <p className="mb-2">{session.room}</p>
          {session.moderators.length > 0 && (
            <div className="mb-2">
              {session.moderators.length > 1 ? (
                <div className="font-semibold">Moderators:</div>
              ) : (
                <div className="font-semibold">Moderator:</div>
              )}
              <div className="flex flex-wrap items-center gap-2">
                {session.moderators.map((moderator) => (
                  <div key={moderator.id} className="flex gap-2 items-center">
                    <div className="w-24 text-[7px]">
                      <SpeakerCard key={moderator.id} speaker={moderator} />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <p className="text-sm font-bold">{moderator.name}</p>
                      {moderator.title && (
                        <p className="text-xs">{moderator.title}</p>
                      )}
                      {moderator.company && (
                        <p className="text-xs">@{moderator.company}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {session.speakers.length > 0 && (
            <div className="mb-2">
              {session.speakers.length > 1 ? (
                <div className="font-semibold">Speakers:</div>
              ) : (
                <div className="font-semibold">Speaker:</div>
              )}
              <div className="flex flex-wrap items-center gap-4">
                {session.speakers.map((speaker) => (
                  <div key={speaker.id} className="flex gap-2 items-center">
                    <div className="w-24 text-[7px]">
                      <SpeakerCard key={speaker.id} speaker={speaker} />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <p className="text-sm font-bold">{speaker.name}</p>
                      {speaker.title && (
                        <p className="text-xs">{speaker.title}</p>
                      )}
                      {speaker.company && (
                        <p className="text-xs">@{speaker.company}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {showDesc && (
            <>
              <p className="mt-2 text-lg md:text-xl">
                {parse(session.description)}
              </p>
              <div className="w-full flex flex-row-reverse mt-2">
                <AddToCalendarBtn />
              </div>
            </>
          )}
        </div>
      </CardLayout>
    </div>
  );
};

const getTypeColorClass = (type) => {
  switch (type) {
    case "Keynote":
      return "bg-color1 text-white";
    case "Panel":
      return "bg-color4 text-white";
    case "Seminar":
      return "bg-color3 text-white";
    case "Workshop":
      return "bg-color4 text-white";
    case "Startup Demo":
      return "bg-color5 text-white";
    case "Fireside Chat":
      return "bg-color6 text-white";
    default:
      return "bg-color5 text-white";
  }
};

export default SessionCard;
