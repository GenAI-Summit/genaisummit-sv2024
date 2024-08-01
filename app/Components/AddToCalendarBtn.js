"use client";

import { useState } from "react";
import Icon from "./Icon";

import { createEvent } from "ics";
import { saveAs } from "file-saver";

const AddToCalendarBtn = ({ title, details, location, startDate, endDate }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleDialog = () => {
    if (showOptions) {
      closeDialog();
    } else {
      openDialog();
    }
  };

  const openDialog = () => {
    setShowOptions(true);
  };

  const closeDialog = () => {
    setShowOptions(false);
  };

  const onAddToGoogleCalendar = () => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    const eventTitle = encodeURIComponent(title);
    const eventDetails = encodeURIComponent(details);
    const eventLocation = encodeURIComponent(location);
    const eventStartDate = startDateObj.toISOString().replace(/-|:|\.\d+/g, "");
    const eventEndDate = endDateObj.toISOString().replace(/-|:|\.\d+/g, "");
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&location=${eventLocation}&dates=${eventStartDate}/${eventEndDate}`;
    window.open(googleCalendarUrl, "_blank");
  };

  const onDownloadICS = () => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    const event = {
      start: [
        startDateObj.getFullYear(),
        startDateObj.getMonth() + 1,
        startDateObj.getDate(),
        startDateObj.getHours(),
        startDateObj.getMinutes(),
      ],
      end: [
        endDateObj.getFullYear(),
        endDateObj.getMonth() + 1,
        endDateObj.getDate(),
        endDateObj.getHours(),
        endDateObj.getMinutes(),
      ],
      title,
      description: details,
      location,
    };

    createEvent(event, (error, value) => {
      if (error) {
        console.error(error);
        return;
      }

      const blob = new Blob([value], { type: "text/calendar;charset=utf-8" });
      saveAs(blob, `${title.replace(/\s/g, "_")}.ics`);
    });
  };

  return (
    <div className="relative inline-block">
      <button
        className="bg-color1 hover:bg-color2 text-color7 font-bold py-2 px-4 rounded ease-in-out duration-300"
        onClick={handleDialog}
      >
        Add to Calendar
      </button>
      {showOptions && (
        <div className="absolute mt-3 bg-color7 rounded-full flex w-full flex justify-center gap-8">
          <div className="cursor-pointer p-0.5" onClick={onAddToGoogleCalendar}>
            <Icon
              src="/images/icons/google_calendar.webp"
              alt="Google Calendar"
              width={35}
              height={35}
            />
          </div>
          <div className="cursor-pointer p-0.5" onClick={onDownloadICS}>
            <Icon
              src="/images/icons/apple_calendar.webp"
              alt="Apple Calendar"
              width={35}
              height={35}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCalendarBtn;
