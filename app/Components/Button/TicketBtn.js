"use client";

import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import Modal from "../Modal";
import Logo from "../Logo";
import useParams from "../../Hooks/useParams";

const TicketBtn = ({
  width,
  mode,
  fill,
  border,
  url = "https://whova.com/portal/registration/genai_202405/",
  platforms,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { getParam } = useParams();

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
    url =
      url +
      (getParam("source")
        ? `?source=${encodeURIComponent(getParam("source"))}`
        : "");
    window.open(url, "_blank");
  };

  if (mode === "modal") {
    return (
      <Suspense>
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
        <Modal
          title="Choose Your Platform"
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        >
          <div className="flex flex items-center justify-start">
            <div className="flex flex-col items-start justify-center space-y-4">
              {platforms?.map((platform) => (
                <div
                  className="cursor-pointer w-full flex items-center justify-start gap-4 group"
                  key={platform.name}
                  onClick={() => openUrl(platform.url)}
                >
                  <div className="w-20 h-20">
                    <Logo src={platform.logo} alt={platform.name} />
                  </div>
                  <p className="text-2xl text-left text-theme1Light1 group-hover:bg-gradient-to-br group-hover:from-theme1Color1 group-hover:via-theme1Color2 group-hover:to-theme1Color3 group-hover:bg-clip-text group-hover:text-transparent transition ease-in-out duration-300">
                    {platform.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      </Suspense>
    );
  }

  if (mode === "black") {
    if (border)
      return (
        <Suspense>
          <button
            className={`group relative z-0 ${width}`}
            onClick={() => openUrl(url)}
          >
            <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3"></div>
            <div className="m-[1.5px] rounded-lg px-4 py-2 bg-theme1Dark1 group-hover:bg-theme1Dark3 transition ease-in-out duration-300">
              <span className="h-full w-full rounded-lg bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text font-light text-transparent transition ease-in-out duration-300">
                Buy Tickets
              </span>
            </div>
          </button>
        </Suspense>
      );

    return (
      <Suspense>
        <button
          className={`group relative z-0 ${width}`}
          onClick={() => openUrl(url)}
        >
          <div className="rounded-lg px-4 py-2 bg-theme1Dark1 border-[1.5px] border-theme1Dark1 group-hover:bg-theme1Dark3 group-hover:border-theme1Dark3 transition ease-in-out duration-300">
            <span className="h-full w-full rounded-lg bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text font-bold text-transparent transition ease-in-out duration-300">
              Buy Tickets
            </span>
          </div>
        </button>
      </Suspense>
    );
  }
  if (fill) {
    return (
      <Suspense>
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
      </Suspense>
    );
  }
  if (mode === "night") {
    return (
      <Suspense>
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
      </Suspense>
    );
  }
  return (
    <Suspense>
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
    </Suspense>
  );
};

export default TicketBtn;
