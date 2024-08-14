import Link from "next/link";

const TicketBtn = ({ width, mode }) => {
  return (
    <Link
      href="https://whova.com/portal/registration/genai_202405/"
      target="_blank"
    >
      <button
        className={`
          group relative z-0 ${width}`}
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-color1 to-color2"></div>
        <div
          className={`m-[1.5px] rounded-full px-4 py-2 ${mode === "night" ? "bg-color6 group-hover:bg-gray-700" : "bg-color8 group-hover:bg-gradient-to-br group-hover:from-color1 group-hover:to-color2"} transition ease-in-out duration-300`}
        >
          <span
            className={`h-full w-full rounded-full bg-gradient-to-br from-color1 to-color2 bg-clip-text font-light text-transparent ${mode === "day" ? "group-hover:text-color8 transition ease-in-out duration-300" : ""}`}
          >
            Buy Tickets
          </span>
        </div>
      </button>
    </Link>
  );
};

export default TicketBtn;
