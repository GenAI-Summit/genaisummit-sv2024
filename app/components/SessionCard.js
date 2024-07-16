"use client";

import React, { useState } from "react";
import CardLayout from "../layouts/CardLayout";
import Drawer from "./Drawer";
import SpeakerDetail from "./SpeakerDetail";
import { useRouter } from "next/navigation";

const SessionCard = ({ session }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentSpeaker, setCurrentSpeaker] = useState(null);
  const router = useRouter();

  const sessionStart = new Date(session.start);
  const sessionEnd = new Date(session.end);

  const typeColorClass = getTypeColorClass(session.type);

  const openDrawer = (speaker) => {
    setIsDrawerOpen(true);
    setCurrentSpeaker(speaker);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setCurrentSpeaker(null);
  };
  const onSpeakerDetail = (speaker) => {
    router.push(`/speakers/${speaker.id}`);
  };

  return (
    <div className="w-full mt-4">
      <CardLayout>
        <div className="flex flex-col items-start text-left">
          <div className="text-xl font-bold">
            <span className={`${typeColorClass} p-0.5 mr-2 rounded`}>
              <span>{session.type}</span>
            </span>
            {session.topic}
          </div>
          <p className="text-gray-600 mb-1">
            {sessionStart.toLocaleTimeString()} -{" "}
            {sessionEnd.toLocaleTimeString()} |{" "}
            {sessionStart.toLocaleDateString()}
          </p>
          <p className="text-gray-600 mb-2">{session.room}</p>
          {session.moderators.length > 0 && (
            <div className="mb-2 flex flex-col items-start">
              {session.moderators.length > 1 ? (
                <div className="font-semibold">Moderators:</div>
              ) : (
                <div className="font-semibold">Moderator:</div>
              )}
              {session.moderators.map((moderator) => (
                <>
                  <div>
                    <span
                      className="cursor-pointer font-medium ease-in-out duration-300 border-b-2 border-transparent hover:border-sky-500"
                      onClick={() => openDrawer(moderator)}
                    >
                      {moderator.name}
                    </span>
                    {moderator.title && <span>, {moderator.title}</span>}
                    {moderator.company && <span> @{moderator.company}</span>}
                  </div>
                </>
              ))}
            </div>
          )}
          {session.speakers.length > 0 && (
            <div className="mb-2 flex flex-col items-start">
              {session.speakers.length > 1 ? (
                <div className="font-semibold">Speakers:</div>
              ) : (
                <div className="font-semibold">Speaker:</div>
              )}
              {session.speakers.map((speaker) => (
                <>
                  <div>
                    <span
                      className="cursor-pointer font-medium ease-in-out duration-300 border-b-2 border-transparent hover:border-sky-500"
                      onClick={() => openDrawer(speaker)}
                    >
                      {speaker.name}
                    </span>
                    {speaker.title && <span>, {speaker.title}</span>}
                    {speaker.company && <span> @{speaker.company}</span>}
                  </div>
                </>
              ))}
            </div>
          )}
          <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
            {currentSpeaker && <SpeakerDetail speaker={currentSpeaker} />}
            {currentSpeaker && (
              <div>
                <span
                  className="mt-2 cursor-pointer font-medium ease-in-out duration-300 border-b-2 border-transparent hover:border-sky-500"
                  onClick={() => onSpeakerDetail(currentSpeaker)}
                >
                  All Sessions by {currentSpeaker.name}
                </span>
              </div>
            )}
          </Drawer>
        </div>
      </CardLayout>
    </div>
  );
};

const getTypeColorClass = (type) => {
  switch (type) {
    case "Keynote":
      return "bg-sky-500 text-white";
    case "Panel Discussion":
      return "bg-green-500 text-white";
    case "Seminar":
      return "bg-yellow-500 text-white";
    case "Workshop":
      return "bg-purple-500 text-white";
    case "Startup Demo":
      return "bg-orange-500 text-white";
    case "Fireside Chat":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export default SessionCard;
