"use client"; import { useEffect } from "react";


const GreetingBubble = ({ modalOpen, isBubbleClosed, isBubbleVisible, setIsBubbleVisible }) => {

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsBubbleVisible(scrollPosition > 700 && !isBubbleClosed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBubbleClosed, isBubbleVisible, setIsBubbleVisible]);

  const umamiTrack = (evt) => {
    window?.umami?.track(evt);
  };

  return (
    <div
      className={`fixed bottom-64 right-7 transition-opacity duration-300 ${
        isBubbleVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } z-20 cursor-pointer`}
      onClick={() => {
        modalOpen();
        umamiTrack("Chatbot Bubble");
      }}
    >
      <div className="bg-theme1Light1 text-theme1Dark1 p-4 rounded-lg shadow-md max-w-[230px] text-wrap relative group">
        <p className="text-sm text-left">🤖 👋🏻 Welcome! What can I do for you today?</p>
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-r-[10px] border-r-transparent absolute -bottom-2 right-4"></div>
      </div>
    </div>
  );
};

export default GreetingBubble;
