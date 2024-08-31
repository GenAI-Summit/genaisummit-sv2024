"use client";

import { useState } from "react";
import CalendarBtnDialog from "./CalendarBtnDialog";
import { motion, AnimatePresence } from "framer-motion";
import { PTtoUTC } from "@/lib/time";
// import Triangle from "../SVG/Triangle";

import { createEvent } from "ics";
import { saveAs } from "file-saver";

const AddToCalendarBtn = ({
  title,
  details,
  location,
  startDate,
  endDate,
  width,
  mode,
}) => {
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
    const startDateObj = PTtoUTC(startDate);
    const endDateObj = PTtoUTC(endDate);
    const eventTitle = encodeURIComponent(title);
    const eventDetails = encodeURIComponent(details);
    const eventLocation = encodeURIComponent(location);
    const eventStartDate = startDateObj.toISOString().replace(/-|:|\.\d+/g, "");
    const eventEndDate = endDateObj.toISOString().replace(/-|:|\.\d+/g, "");
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&location=${eventLocation}&dates=${eventStartDate}/${eventEndDate}`;
    window.open(googleCalendarUrl, "_blank");
  };

  const onDownloadICS = () => {
    const startDateObj = PTtoUTC(startDate);
    const endDateObj = PTtoUTC(endDate);
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

  if (mode === "plain") {
    return (
      <>
        <button
          className={`hidden md:block relative group z-0 ${width}`}
          onMouseEnter={openDialog}
          onMouseLeave={closeDialog}
        >
          <div className="m-[1.5px] rounded-full bg-transparent px-4 py-2 transition-colors duration-300 hover:bg-theme1Dark3 border-[1.5px] border-theme1Light1">
            <span className="h-full w-full rounded-full font-light text-theme1Light1">
              Add to Calendar
            </span>
          </div>
          {showDialog && (
            <div className="absolute w-48 overflow-hidden">
              <AnimatePresence>
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.7, type: "spring", ease: "linear" }}
                >
                  <CalendarBtnDialog
                    onAddToGoogleCalendar={onAddToGoogleCalendar}
                    onDownloadICS={onDownloadICS}
                    isOpen={showDialog}
                    onClose={closeDialog}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </button>
        <button
          className={`md:hidden relative rounded relative group z-0 ${width}`}
          onClick={handleDialog}
        >
          <div className="m-[1.5px] rounded-full bg-transparent px-4 py-2 transition-colors duration-300 hover:bg-theme1Dark3 border-[1.5px] border-theme1Light1">
            <span className="h-full w-full rounded-full font-light text-theme1Light1">
              Add to Calendar
            </span>
          </div>
          {showDialog && (
            <div className="absolute w-48 overflow-hidden">
              <AnimatePresence>
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.7, type: "spring", ease: "linear" }}
                >
                  <CalendarBtnDialog
                    onAddToGoogleCalendar={onAddToGoogleCalendar}
                    onDownloadICS={onDownloadICS}
                    isOpen={showDialog}
                    onClose={closeDialog}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </button>
      </>
    );
  }

  return (
    <>
      <button
        className={`hidden md:block relative group z-0 ${width}`}
        onMouseEnter={openDialog}
        onMouseLeave={closeDialog}
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-color1 to-color2"></div>
        <div className="m-[1.5px] rounded-full bg-color6 px-4 py-2 transition-colors duration-300 hover:bg-gray-700">
          <span className="h-full w-full rounded-full bg-gradient-to-br from-color1 to-color2 bg-clip-text font-light text-transparent">
            Add to Calendar
          </span>
        </div>
        {showDialog && (
          <CalendarBtnDialog
            onAddToGoogleCalendar={onAddToGoogleCalendar}
            onDownloadICS={onDownloadICS}
            isOpen={showDialog}
            onClose={closeDialog}
          />
        )}
      </button>
      <button
        className={`md:hidden relative rounded relative group z-0 ${width}`}
        onClick={handleDialog}
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-color1 to-color2"></div>
        <div className="m-[1.5px] rounded-full bg-color6 px-4 py-2 transition-colors duration-300 hover:bg-gray-700">
          <span className="h-full w-full rounded-full bg-gradient-to-br from-color1 to-color2 bg-clip-text font-light text-transparent">
            Add to Calendar
          </span>
        </div>
        {showDialog && (
          <CalendarBtnDialog
            onAddToGoogleCalendar={onAddToGoogleCalendar}
            onDownloadICS={onDownloadICS}
            isOpen={showDialog}
            onClose={closeDialog}
          />
        )}
      </button>
    </>
  );
};

export default AddToCalendarBtn;
