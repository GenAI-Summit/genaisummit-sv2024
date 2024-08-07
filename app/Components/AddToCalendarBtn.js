"use client";

import { useState } from "react";
import Icon from "./Icon";
import CalendarBtnDialog from "./CalendarBtnDialog";
import Triangle from "./SVG/Triangle";

import { createEvent } from "ics";
import { saveAs } from "file-saver";

const AddToCalendarBtn = ({ title, details, location, startDate, endDate }) => {
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const handleDialog = () => {
    if (showDialog) {
      closeDialog();
    } else {
      openDialog();
    }
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
    <>
      <div
        className="w-48 cursor-pointer hidden md:block rounded bg-color1 hover:bg-color2 ease-in-out duration-300"
        onMouseEnter={openDialog}
        onMouseLeave={closeDialog}
      >
        <div className="text-color7 font-bold py-2 px-4 inline-flex items-center gap-1">
          Add to Calendar
          <div className="inline-block">
            <Triangle isOpen={showDialog} />
          </div>
        </div>
        {showDialog && (
          <div className="w-full">
            <CalendarBtnDialog
              onAddToGoogleCalendar={onAddToGoogleCalendar}
              onDownloadICS={onDownloadICS}
            />
          </div>
        )}
      </div>
      <div
        className="w-48 cursor-pointer md:hidden relative inline-block rounded bg-color1 hover:bg-color2 ease-in-out duration-300"
        onClick={handleDialog}
      >
        <div className="text-color7 font-bold py-2 px-4 inline-flex items-center">
          Add to Calendar
          <div className="inline-block">
            {showDialog ? (
              <Icon
                src="/images/icons/triangle_up.svg"
                alt="Close"
                width={25}
                height={25}
              />
            ) : (
              <Icon
                src="/images/icons/triangle_down.svg"
                alt="Open"
                width={25}
                height={25}
              />
            )}
          </div>
        </div>
        {showDialog && (
          <CalendarBtnDialog
            onAddToGoogleCalendar={onAddToGoogleCalendar}
            onDownloadICS={onDownloadICS}
          />
        )}
      </div>
    </>
  );
};

export default AddToCalendarBtn;
