"use client";

import { useState, useEffect, useRef } from "react";
import Loader from "@/components/Loader";
import Image from "next/image";
import ModalEnter from "@/motions/ModalEnter";
import Script from "next/script";
import CheckBox from "@/components/SVG/CheckBox";
import umamiTrack from "@/lib/umamiTrace";

const CTCT_SCRIPT_SRC =
  "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js";
const CTCT_FORM_ID = "56df6b61-4bab-441d-9295-6729eb3b21be";

const date = "1010";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAgain, setShowAgain] = useState(true);
  const modalRef = useRef(null);

  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isFormInitialized, setIsFormInitialized] = useState(false);

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

  useEffect(() => {
    window._ctct_m = "30bb8cd15e4ce5c252b5c0df5da52b42";
  }, []);

  useEffect(() => {
    if (isScriptLoaded) {
      const checkFormInitialized = setInterval(() => {
        if (document.querySelector(".ctct-inline-form")) {
          setIsFormInitialized(true);
          clearInterval(checkFormInitialized);
        }
      }, 100);

      return () => clearInterval(checkFormInitialized);
    }
  }, [isScriptLoaded]);

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
          <Image
            className="object-cover"
            src="/images/propaganda/popup.gif"
            alt="Popup Modal"
            width={500}
            height={500}
          />
          <div className="w-full p-4">
            <Script
              src={CTCT_SCRIPT_SRC}
              strategy="lazyOnload"
              onLoad={() => setIsScriptLoaded(true)}
            />
            <div className="text-center mb-4">
              <h2 className="text-theme1Dark1 text-xl md:text-3xl font-bold mb-2">
                Get 10% Off Your Tickets!
              </h2>
              <p className="text-theme1Dark1 text-sm md:text-lg">
                Sign up for newsletter and get exclusive discounts
              </p>
            </div>
            {!isFormInitialized && <Loader color="border-theme1Dark1" />}
            <div className="ctct-inline-form" data-form-id={CTCT_FORM_ID} />
            {isFormInitialized && (
              <div className="border-t border-theme1Dark1 pt-4">
                <div
                  className="text-theme1Dark1 flex items-center gap-x-2 cursor-pointer"
                  onClick={onShowAgainChange}
                >
                  <CheckBox
                    label="Do not show this update again"
                    checked={!showAgain}
                    color="text-theme1Dark1"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </ModalEnter>
    </div>
  );
};

export default PopupModal;