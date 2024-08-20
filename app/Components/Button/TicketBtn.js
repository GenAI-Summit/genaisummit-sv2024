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
        <div className="m-[1.5px] rounded-full px-4 py-2 bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-theme1BtnColor3  group-hover:bg-gradient-to-br group-hover:from-theme1BtnHoverColor1 group-hover:via-theme1BtnHoverColor2 group-hover:to-theme1BtnHoverColor3 transition-colors ease-in-out duration-300">
          <span className="h-full w-full rounded-full text-theme1BtnTextLight font-bold">
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
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-theme1BtnColor3"></div>
        <div className="m-[1.5px] rounded-full px-4 py-2 bg-theme1BtnBgDark group-hover:bg-gray-700 transition ease-in-out duration-300">
          <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-theme1BtnColor3 bg-clip-text font-bold text-transparent transition ease-in-out duration-300">
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
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-theme1BtnColor3"></div>
      <div className="m-[1.5px] rounded-full px-4 py-2 bg-theme1BtnBgLight group-hover:bg-gradient-to-br group-hover:from-theme1BtnColor1 group-hover:via-theme1BtnColor2 group-hover:to-theme1BtnColor3 transition ease-in-out duration-300">
        <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-theme1BtnColor3 bg-clip-text font-bold text-transparent group-hover:text-theme1BtnTextLight group-hover:drop-shadow-2xl transition ease-in-out duration-300">
          Buy Tickets
        </span>
      </div>
    </button>
  );
};

export default TicketBtn;
