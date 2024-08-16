"use client";

import { useRouter } from "next/navigation";

const TicketBtn = ({
  width,
  mode,
  fill,
  url = "https://whova.com/portal/registration/genai_202405/",
}) => {
  const router = useRouter();
  const onClick = (url) => {
    if (url === "/tickets") {
      router.push(url);
      return;
    }
    window.open(url, "_blank");
  };
  if (fill) {
    return (
      <button
        className={`
            group relative z-0 ${width}`}
        onClick={() => onClick(url)}
      >
        <div className="m-[1.5px] rounded-full px-4 py-2 bg-gradient-to-br from-color1 to-color2  group-hover:bg-gradient-to-br group-hover:from-color15 group-hover:to-color14 transition-colors ease-in-out duration-300">
          <span className="h-full w-full rounded-full text-color8">
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
        onClick={() => onClick(url)}
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-color1 to-color2"></div>
        <div className="m-[1.5px] rounded-full px-4 py-2 bg-color6 group-hover:bg-gray-700 transition ease-in-out duration-300">
          <span className="h-full w-full rounded-full bg-gradient-to-br from-color1 to-color2 bg-clip-text font-light text-transparent transition ease-in-out duration-300">
            Buy Tickets
          </span>
        </div>
      </button>
    );
  }
  return (
    <button
      className={`
          group relative z-0 ${width}`}
      onClick={() => onClick(url)}
    >
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-color1 to-color2"></div>
      <div className="m-[1.5px] rounded-full px-4 py-2 bg-color8 group-hover:bg-gradient-to-br group-hover:from-color1 group-hover:to-color2 transition ease-in-out duration-300">
        <span className="h-full w-full rounded-full bg-gradient-to-br from-color1 to-color2 bg-clip-text font-light text-transparent group-hover:text-color8 transition ease-in-out duration-300">
          Buy Tickets
        </span>
      </div>
    </button>
  );
};

export default TicketBtn;
