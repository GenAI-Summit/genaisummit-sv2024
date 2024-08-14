"use client";

import { useRouter } from "next/navigation";

const ShowMore = ({ target, text = "Show More" }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(target);
  };
  return (
    <button className="group relative z-0" onClick={onClick}>
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-color1 to-color2"></div>
      <div className="m-[1.5px] rounded-full bg-color6 px-4 py-2 transition-colors duration-300 group-hover:bg-gray-700">
        <span className="h-full w-full rounded-full bg-gradient-to-br from-color1 to-color2 bg-clip-text font-light text-transparent">
          {text}
        </span>
      </div>
    </button>
  );
};

export default ShowMore;
