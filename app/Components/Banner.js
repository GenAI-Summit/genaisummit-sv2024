import Image from "next/image";
import TicketBtn from "./TicketBtn";
import AddToCalendarBtn from "./AddToCalendarBtn";
import CountdownTimer from "./Counter/CountdownTimer";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/propaganda/santaclara_bg.webp"
        alt="Santa Clara Background"
        fill
        style={{ objectFit: "cover" }}
        className="z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 via-gray-600 to-transparent opacity-70 z-20"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-color7 text-center p-6 gap-y-10">
        <div className="font-monaspace_krypton">
          <p className="text-2xl md:text-5xl font-bold mb-4 text-color1">
            #AIAREALL
          </p>
          <p className="text-4xl md:text-7xl font-bold mb-4">GENAI SUMMIT</p>
          <p className="text-4xl md:text-7xl font-bold mb-4">
            <span>Silicon Valley</span>{" "}
            <span className="text-color1">2024</span>
          </p>
        </div>
        <div>
          <div className="text-2xl md:text-6xl font-bold mb-4">
            <CountdownTimer time="2024-11-01T00:00:00" />
          </div>
          <p className="text-xl md:text-2xl mb-6">
            <span className="font-bold">Santa Clara Convention Center</span>
            <span className="text-color1">{" | "}</span>
            <span className="font-bold">Santa Clara, CA</span>
            <span className="text-color1">{" | "}</span>
            <span className="font-bold">Nov 1 - Nov 3</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <TicketBtn />
          <AddToCalendarBtn />
        </div>
      </div>
    </div>
  );
};

export default Banner;
