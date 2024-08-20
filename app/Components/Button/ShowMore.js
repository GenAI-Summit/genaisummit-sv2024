"use client";

import { useRouter } from "next/navigation";

const ShowMore = ({ target, text = "Show More", mode }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(target);
  };
  if (mode === "day") {
    return (
      <button className="group relative z-0" onClick={onClick}>
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3"></div>
        <div className="m-[1.5px] rounded-full bg-theme1Dark1 px-4 py-2 transition duration-300 group-hover:bg-gray-800">
          <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text font-light text-transparent">
            {text}
          </span>
        </div>
      </button>
    );
  }
  return (
    <button className="group relative z-0" onClick={onClick}>
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3"></div>
      <div className="m-[1.5px] rounded-full bg-theme1Dark1 px-4 py-2 transition-colors duration-300 group-hover:bg-gray-800">
        <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text font-light text-transparent">
          {text}
        </span>
      </div>
    </button>
  );
};

export default ShowMore;
