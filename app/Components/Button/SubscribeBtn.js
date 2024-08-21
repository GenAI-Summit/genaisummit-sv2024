import Link from "next/link";

const SubscribeBtn = ({ width, mode }) => {
  if (mode === "plain") {
    return (
      <Link href="/subscription" target="_blank">
        <button className={`relative group z-0 ${width}`}>
          <div className="rounded-full bg-transparent px-4 py-2 transition-colors duration-300 hover:bg-theme1Dark3 border-[1.5px] border-theme1Light1">
            <span className="h-full w-full rounded-full font-light text-theme1Light1">
              Get Updates
            </span>
          </div>
        </button>
      </Link>
    );
  }
  return (
    <Link href="/subscription" target="_blank">
      <button className={`relative group z-0 ${width}`}>
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3"></div>
        <div className="m-[1.5px] rounded-full bg-theme1Dark1 px-4 py-2 transition-colors duration-300 hover:bg-theme1Dark3">
          <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text font-light text-transparent">
            Get Updates
          </span>
        </div>
      </button>
    </Link>
  );
};

export default SubscribeBtn;
