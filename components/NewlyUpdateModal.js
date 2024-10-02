"use client";
import { useState, useEffect, useRef } from "react";
import Logo from "@/components/Logo";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import Modal from "@/components/Modal";
import useExhibitors from "@/hooks/useExhibitors";
import { Fireworks } from "@fireworks-js/react";
import umamiTrack from "@/lib/umamiTrace";
import FallingLogos from "@/motions/FallingLogos";
import CheckBox from "@/components/SVG/CheckBox";

const NewlyUpdateModal = () => {
  const { getExhibitorById, isLoading, isError } = useExhibitors();
  const [isOpen, setIsOpen] = useState(false);
  const [showAgain, setShowAgain] = useState(true);
  const fireworksRef = useRef(null);
  const updateId = 366332;

  useEffect(() => {
    const localLastShown = localStorage.getItem("popupLastShown");
    const sessionLastShown = sessionStorage.getItem("popupLastShown");
    const shouldShow = !sessionLastShown && (!localLastShown || localLastShown !== updateId.toString());

    if (shouldShow) {
      setIsOpen(true);
      sessionStorage.setItem("popupLastShown", updateId.toString());
    }

    if (fireworksRef.current) {
      fireworksRef.current.updateOptions({
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.5,
        friction: 0.97,
        gravity: 1.05,
        particles: 100,
        traceLength: 3,
        traceSpeed: 20,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        rocketsPoint: {
          min: 50,
          max: 50,
        },
        hue: {
          min: 0,
          max: 360,
        },
      });
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  const exhibitor = getExhibitorById(updateId);

  const onClose = () => {
    setIsOpen(false);
    if (!showAgain) {
      umamiTrack("Newly Update Do Not Show Again");
      localStorage.setItem("popupLastShown", updateId.toString());
    }
  };

  const onShowAgainChange = () => {
    setShowAgain(!showAgain);
  };

  return (
    <>
      {isOpen && (
        <>
          <FallingLogos logoSrc={exhibitor.logo} alt={exhibitor.name} />
          <Fireworks
            ref={fireworksRef}
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              position: "fixed",
              zIndex: 30,
            }}
          />
        </>
      )}
      <Modal isModalOpen={isOpen} closeModal={onClose} title="Newly Updated Exhibitor">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col gap-y-4">
            <div className="text-2xl md:text-4xl">Let&apos;s Welcome</div>
          </div>
          <Logo src={exhibitor.logo} alt={exhibitor.name} width={500} height={500} padding="p-0" />
          <div className="flex items-center gap-x-2 cursor-pointer" onClick={onShowAgainChange}>
            <CheckBox label="Do not show this update again" checked={!showAgain} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NewlyUpdateModal;