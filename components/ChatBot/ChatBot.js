"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ChatBotDialog from "./ChatBotDialog";
import GreetingBubble from "./GreetingBubble";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isBubbleClosed, setIsBubbleClosed] = useState(false);
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setIsVisible(scrollPosition > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onOpen = () => {
    setIsBubbleClosed(true);
    setIsBubbleVisible(false);
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const umamiTrack = (evt) => {
    window?.umami?.track(evt);
  };

  return (
    <>
      <button
        type="button"
        className={`fixed bottom-44 right-7 w-14 h-14 flex items-center justify-center rounded-full bg-color13 text-color6 shadow-md transition-opacity ${isVisible ? "opacity-100" : "opacity-0"} z-20`}
        aria-label="Chat with us"
        onClick={() => {
          onOpen();
          umamiTrack("Chatbox Icon");
        }}
      >
        <Image
          src="/images/icons/chatbot.svg"
          alt="Chatbot"
          width={24}
          height={24}
        />
      </button>
      <GreetingBubble modalOpen={onOpen} isBubbleClosed={isBubbleClosed} isBubbleVisible={isBubbleVisible} setIsBubbleVisible={setIsBubbleVisible} />
      <ChatBotDialog isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ChatBot;
