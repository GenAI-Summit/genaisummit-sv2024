"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "../Modal";

const TicketBtn = ({
  width,
  mode,
  fill,
  url = "https://whova.com/portal/registration/genai_202405/",
  platforms,
}) => {
  console.log("platforms", platforms);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openUrl = (url) => {
    if (url === "/tickets") {
      router.push(url);
      return;
    }
    window.open(url, "_blank");
  };

  if (mode === "modal") {
    return (
      <>
        <button
          className={`
          group relative z-0 ${width}`}
          onClick={openModal}
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3"></div>
          <div className="m-[1.5px] rounded-full px-4 py-2 bg-theme1Dark1 group-hover:bg-gray-800 transition ease-in-out duration-300">
            <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text font-light text-transparent transition ease-in-out duration-300">
              Buy Tickets
            </span>
          </div>
        </button>
        <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
          <div className="flex flex-col items-center justify-center space-y-8">
            {platforms?.map((platform) => (
              <p
                key={platform.name}
                onClick={() => openUrl(platform.url)}
                className="cursor-pointer font-monaspace_neon text-2xl text-theme1Light1 hover:bg-gradient-to-br hover:from-theme1Color1 hover:via-theme1Color2 hover:to-theme1Color3 hover:bg-clip-text hover:text-transparent transition ease-in-out duration-300"
              >
                {platform.name}
              </p>
            ))}
          </div>
        </Modal>
      </>
    );
  }

  if (mode === "black") {
    return (
      <button
        className={`
          group relative z-0 ${width}`}
        onClick={() => openUrl(url)}
      >
        <div className="rounded-lg px-4 py-2 bg-theme1Dark1 border-[1.5px] border-theme1Dark1 group-hover:bg-theme1Dark3 group-hover:border-theme1Dark3 transition ease-in-out duration-300">
          <span className="h-full w-full rounded-lg bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text font-bold text-transparent transition ease-in-out duration-300">
            Buy Tickets
          </span>
        </div>
      </button>
    );
  }
  if (fill) {
    return (
      <button
        className={`group relative z-0 ${width}`}
        onClick={() => openUrl(url)}
      >
        <div className="m-[1.5px] rounded-full px-4 py-2 bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3  group-hover:bg-gradient-to-br group-hover:from-theme1Color3 group-hover:via-theme1Color2 group-hover:to-theme1Color1 transition-colors ease-in-out duration-300">
          <span className="h-full w-full rounded-full text-theme1Light2 font-light">
            Buy Tickets
          </span>
        </div>
      </button>
    );
  }
  if (mode === "night") {
    return (
      <button
        className={`
          group relative z-0 ${width}`}
        onClick={() => openUrl(url)}
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3"></div>
        <div className="m-[1.5px] rounded-full px-4 py-2 bg-theme1Dark1 group-hover:bg-gray-800 transition ease-in-out duration-300">
          <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text font-light text-transparent transition ease-in-out duration-300">
            Buy Tickets
          </span>
        </div>
      </button>
    );
  }
  return (
    <button
      className={`group relative z-0 ${width}`}
      onClick={() => openUrl(url)}
    >
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3"></div>
      <div className="m-[1.5px] rounded-full px-4 py-2 bg-theme1Light1 group-hover:bg-gradient-to-br group-hover:from-theme1Color1 group-hover:via-theme1Color2 group-hover:to-theme1Color3 transition ease-in-out duration-300">
        <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text font-light text-transparent transition ease-in-out duration-300">
          Buy Tickets
        </span>
      </div>
    </button>
  );
};

export default TicketBtn;
