"use client";

import { useState, useEffect, useRef } from "react";
import ModalEnter from "@/motions/ModalEnter";
import CheckBox from "@/components/SVG/CheckBox";
import umamiTrack from "@/lib/umamiTrace";

const date = "1010";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAgain, setShowAgain] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    const localLastShown = localStorage.getItem("popupLastShown");
    const sessionLastShown = sessionStorage.getItem("popupLastShown");
    const shouldShow = !sessionLastShown && (!localLastShown || localLastShown !== date);

    console.log(shouldShow);
    if (shouldShow) {
      setIsOpen(true);
      sessionStorage.setItem("popupLastShown", date);
    }
  }, []);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  const onClose = () => {
    setIsOpen(false);
    if (!showAgain) {
      umamiTrack("Popup Do Not Show Again");
      localStorage.setItem("popupLastShown", date);
    }
  };

  const onShowAgainChange = () => {
    setShowAgain(!showAgain);
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 h-full w-full flex items-center justify-center z-50"
      onClick={onClose}
      ref={modalRef}
      onKeyDown={onKeyDown}
      tabIndex={-1}
    >
      <ModalEnter>
        <div
          className="relative max-w-[500px] bg-popupBg rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="text-2xl absolute top-2 right-2 py-1 px-2 text-theme1Dark1"
            onClick={onClose}
          >
            X
          </button>
          <div className="w-full p-4">
            <div className="text-center mb-4">
              <h2 className="text-theme1Dark1 text-xl md:text-3xl font-bold mb-2">
                Thank you!
              </h2>
              <p className="text-theme1Dark1 text-sm md:text-lg">
                We would love to hear from you.
              </p>
            </div>
            <button
              className="bg-theme1Dark1 text-white px-4 py-2 rounded-md"
              onClick={() => {
                umamiTrack("Popup Give Feedback");
                window.open(
                  "https://form.gptdao.ai/sv2024-feedback?source=website",
                  "_blank",
                );
              }}
            >
              Give Feedback
            </button>
            <div className="border-t border-theme1Dark1 pt-4 mt-4">
              <div
                className="text-theme1Dark1 flex items-center gap-x-2 cursor-pointer"
                onClick={onShowAgainChange}
              >
                <CheckBox
                  label="Do not show this again"
                  checked={!showAgain}
                  color="text-theme1Dark1"
                />
              </div>
            </div>
          </div>
        </div>
      </ModalEnter>
    </div>
  );
};

export default PopupModal;