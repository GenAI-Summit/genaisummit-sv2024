import Link from "next/link";

const SubscribeBtn = ({ width }) => {
  return (
    <Link href="/subscription" target="_blank">
      <button className={`relative group z-0 ${width}`}>
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-theme1BtnColor3"></div>
        <div className="m-[1.5px] rounded-full bg-theme1BtnBgDark px-4 py-2 transition-colors duration-300 hover:bg-theme1BtnBgHoverDark">
          <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-theme1BtnColor3 bg-clip-text font-bold text-transparent">
            Get Updates
          </span>
        </div>
      </button>
    </Link>
  );
};

export default SubscribeBtn;
