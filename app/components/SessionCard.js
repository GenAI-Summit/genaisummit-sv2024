"use client";

import React, { useState } from "react";
import Drawer from "./Drawer";
import SpeakerDetail from "./SpeakerDetail";

const SessionCard = ({ item }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentSpeaker, setCurrentSpeaker] = useState(null);

  const typeColorClass = getTypeColorClass(item.type);

  const openDrawer = (speaker) => {
    setIsDrawerOpen(true);
    setCurrentSpeaker(speaker);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setCurrentSpeaker(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-2 border-2 border-white hover:border-sky-500 ease-in-out duration-300">
      <div className="text-xl font-bold">
        <span className={`${typeColorClass} p-0.5 mr-2 rounded`}>
          <span>{item.type}</span>
        </span>
        {item.topic}
      </div>
      <p className="text-gray-600 mb-1">
        {item.time} | {item.date}
      </p>
      <p className="text-gray-600 mb-2">{item.room}</p>
      {item.moderators.length > 0 && (
        <div className="mb-2">
          {item.moderators.length > 1 ? (
            <div className="font-semibold">moderators:</div>
          ) : (
            <div className="font-semibold">moderator:</div>
          )}
          {item.moderators.map((moderator) => (
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
      {item.speakers.length > 0 && (
        <div className="mb-2">
          {item.speakers.length > 1 ? (
            <div className="font-semibold">Speakers:</div>
          ) : (
            <div className="font-semibold">Speaker:</div>
          )}
          {item.speakers.map((speaker) => (
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
      </Drawer>
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
