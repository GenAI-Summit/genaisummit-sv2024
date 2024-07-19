import Image from "next/image";
import TicketBtn from "./TicketBtn";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/propaganda/santaclara_bg.webp"
        alt="Santa Clara Background"
        layout="fill"
        objectFit="cover"
        className="z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 via-gray-600 to-transparent opacity-70 z-20"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center p-6">
        <p className="text-5xl font-bold mb-4 text-sky-400">#ALLAREAI</p>
        <p className="text-7xl font-bold mb-4">Discover What’s Next in AI</p>
        <p className="text-2xl mb-6">
          <span className="font-bold">Santa Clara Convention Center</span>
          {" | "}
          <span className="font-bold">Santa Clara, CA</span> {" | "}
          <span className="font-bold">Nov 1 - Nov 3</span>
        </p>
        <TicketBtn />
      </div>
    </div>
  );
};

export default Banner;
