import { motion, AnimatePresence } from "framer-motion";
import Close from "@/components/SVG/Close";
import Image from "next/image";
import Messages from "./Messages";
import Questions from "./Questions";

const ChatBotDialog = ({ isOpen, onClose }) => {
  const openDiscord = () => {
    window.open("https://discord.gg/eaMuvHKFZW", "_blank");
    umamiTrack("Chatbot Discord");
  };

  const umamiTrack = (evt) => {
    window?.umami?.track(evt);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-0 right-0 m-4 z-50 w-96 h-[32rem]"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.1 }}
        >
          <div className="flex flex-col w-full h-full bg-white rounded-lg overflow-hidden">
            <div className="bg-discord text-white p-4 flex justify-between items-center">
              <h2 className="text-lg font-bold">GenAI Summit SV 2024 Bot</h2>
              <button onClick={() => {
                onClose();
                umamiTrack("Chatbot Close");
              }}>
                <Close color="stroke-theme1Light1" />
              </button>
            </div>

            <div className="flex flex-col flex-grow bg-theme1Light1 p-4 overflow-y-auto gap-y-12 items-center">
              <Messages />
              <Questions />
            </div>

            <div className="cursor-pointer bg-discord text-white p-4 flex justify-center items-center gap-4" onClick={openDiscord}>
              <Image src="/images/icons/discord.svg" alt="Discord" width={50} height={50} />
              <div className="w-full px-3 py-2 bg-theme1Light1 rounded-lg text-theme1Dark1">
                Chat with AI bot on Discord!
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBotDialog;