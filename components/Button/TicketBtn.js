"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import Logo from "@/components/Logo";
import Copy from "@/components/Button/Copy";
import useParams from "@/hooks/useParams";

const TicketBtn = ({
  width = "min-w-36",
  mode,
  fill,
  border,
  url = "https://whova.com/portal/registration/genai_202405/",
  platforms,
  evt = "",
  student = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { getAllParamsStr, getParam } = useParams();
  const discountCode = getParam("discount")
    ? getParam("discount")
    : getParam("coupon")
      ? getParam("coupon")
      : null;

  console.log(discountCode);

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
    const str = getAllParamsStr();
    url = url + (str ? "?" + str : "");
    window.open(url, "_blank");
  };

  const umamiTrack = (evt) => {
    window?.umami?.track(evt);
  };

  const onVerify = () => {
    router.push("/edu-verify");
  };

  if (mode === "modal") {
    return (
      <>
        <button
          className={`
          group relative z-0 ${width}`}
          onClick={() => {
            openModal();
            umamiTrack(evt);
          }}
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
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-col items-start justify-center space-y-4">
              {student && (
                <div className="mt-4">
                  <p className="text-left text-base md:text-lg text-theme1Light1">
                    <span className="font-bold">Note: </span>
                    <span>To get student discount, you need to </span>
                    <span
                      className="text-theme1Color3 cursor-pointer hover:underline"
                      onClick={() => {
                        onVerify();
                        umamiTrack("Ticket Modal - Go to Verify");
                      }}
                    >
                      verify your educational email
                    </span>
                    <span> first.</span>
                  </p>
                </div>
              )}
              {platforms?.map((platform) => (
                <div
                  className="cursor-pointer w-full flex items-center justify-start gap-4 group"
                  key={platform.name}
                  onClick={() => {
                    openUrl(platform.url);
                    umamiTrack(evt + " - " + platform.name);
                  }}
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
            {discountCode && (
              <div className="mt-4 flex items-center gap-4">
                <p className="text-left text-base md:text-xl text-theme1Light1">
                  <span className="font-bold">Your discount code: </span>
                  <span> {discountCode}</span>
                </p>
                <Copy text={discountCode} />
              </div>
            )}
          </div>
        </Modal>
      </>
    );
  }

  if (mode === "black") {
    if (border)
      return (
        <button
          className={`group relative z-0 ${width}`}
          onClick={() => {
            openUrl(url);
            umamiTrack(evt);
          }}
        >
          <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3"></div>
          <div className="m-[1.5px] rounded-lg px-4 py-2 bg-theme1Dark1 group-hover:bg-theme1Dark3 transition ease-in-out duration-300">
            <span className="h-full w-full rounded-lg bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text font-light text-transparent transition ease-in-out duration-300">
              Buy Tickets
            </span>
          </div>
        </button>
      );

    return (
      <button
        className={`group relative z-0 ${width}`}
        onClick={() => {
          openUrl(url);
          umamiTrack(evt);
        }}
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
        onClick={() => {
          openUrl(url);
          umamiTrack(evt);
        }}
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
        onClick={() => {
          openUrl(url);
          umamiTrack(evt);
        }}
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
      onClick={() => {
        openUrl(url);
        umamiTrack(evt);
      }}
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
