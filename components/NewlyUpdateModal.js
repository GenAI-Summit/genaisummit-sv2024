"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "@/components/Logo";
import Modal from "@/components/Modal";
import { Fireworks } from "@fireworks-js/react";
import SubscribeBtn from "@/components/Button/SubscribeBtn";
import umamiTrack from "@/lib/umamiTrace";
// import FallingLogos from "@/motions/FallingLogos";
import CheckBox from "@/components/SVG/CheckBox";
import useParams from "@/hooks/useParams";

const NewlyUpdateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAgain, setShowAgain] = useState(true);
  const fireworksRef = useRef(null);
  const { getParam } = useParams();
  const name = "Tesla";
  const logo = "https://d1keuthy5s86c8.cloudfront.net/genai_202405/8a2f8d63b73774c2d5682d73f1421efc5a63c68bf3d838ef79890175001db909_1/Tesla1.png";

  const discountCode = getParam("discount")
    ? getParam("discount")
    : getParam("coupon")
      ? getParam("coupon")
      : getParam("whova")
        ? getParam("whova")
        : null;

  useEffect(() => {
    const localLastShown = localStorage.getItem("popupLastShown");
    const sessionLastShown = sessionStorage.getItem("popupLastShown");
    const shouldShow = !sessionLastShown && (!localLastShown || localLastShown !== name);

    if (shouldShow) {
      setIsOpen(true);
      sessionStorage.setItem("popupLastShown", name);
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

  const onClose = () => {
    setIsOpen(false);
    if (!showAgain) {
      umamiTrack("Newly Update Do Not Show Again");
      localStorage.setItem("popupLastShown", name);
    }
  };

  const onShowAgainChange = () => {
    setShowAgain(!showAgain);
  };

  return (
    <>
      {isOpen && (
        <>
          {/* <FallingLogos logoSrc={logo} alt={name} /> */}
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
        <div className="flex flex-col items-center gap-y-8">
          <div className="text-xl md:text-3xl">Let&apos;s Welcome</div>
          <Logo src={logo} alt={name} width={500} height={500} padding="p-0" />
          {!discountCode && (
            <div className="flex flex-col gap-y-4">
              <SubscribeBtn />
              <p className="text-theme1Light1">Sign up latest updates and get 10% off your tickets</p>
            </div>
          )}
          <div className="flex items-center gap-x-2 cursor-pointer" onClick={onShowAgainChange}>
            <CheckBox label="Do not show this update again" checked={!showAgain} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NewlyUpdateModal;