import Link from "next/link";

const SubscribeBtn = ({ width }) => {
  return (
    <Link href="/subscription" target="_blank">
      <button className={`relative group z-0 ${width}`}>
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-color1 to-color2"></div>
        <div className="m-[1.5px] rounded-full bg-color6 px-4 py-2 transition-colors duration-300 hover:bg-gray-700">
          <span className="h-full w-full rounded-full bg-gradient-to-br from-color1 to-color2 bg-clip-text font-light text-transparent">
            Get Updates
          </span>
        </div>
      </button>
    </Link>
  );
};

export default SubscribeBtn;
