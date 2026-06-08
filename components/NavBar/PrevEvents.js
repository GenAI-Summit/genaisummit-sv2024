"use client";

import Link from "next/link";
import WrapperArrow from "@/components/SVG/WrapperArrow";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = ({ closeDrawer, openDialog, closeDialog, showDialog, handleDialog, hoverEffect }) => {
  const events = [
    {
      name: "GenAI Summit SV 2023",
      url: "https://genaisummit.xyz/",
    },
    {
      name: "GenAI Summit SF 2024",
      url: "https://sf2024.genaisummit.xyz/",
    },
    {
      name: "GenAI Summit SV 2024",
      url: "https://sv2024.genaisummit.xyz/",
    },
  ];

  const close = () => {
    closeDrawer();
    closeDialog();
  };

  return (
    <>
      <div
        className="hidden lg:inline-block"
        onMouseOver={openDialog}
        onMouseLeave={closeDialog}
      >
        <div className="inline-flex items-center gap-1 cursor-pointer">
          OUR EVENTS
        </div>
        <AnimatePresence>
          {showDialog && (
            <motion.div
              className="overflow-hidden absolute right-[13%] pt-[2.5px] bg-gradient-to-r from-theme1Color1 via-theme1Color2 to-theme1Color3 shadow-lg rounded-lg z-30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.7, type: "spring", ease: "linear" }}
            >
              <div className="w-full h-full bg-color8 z-40 py-4 px-6 rounded-lg">
                {events.map((event, index) => (
                  <Link
                    key={index}
                    className="block cursor-pointer p-2"
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                  >
                    <motion.div
                      className={`relative inline ${hoverEffect}`}
                      whileHover="hover"
                      initial="initial"
                      variants={{
                        initial: { color: "theme1Dark1" },
                      }}
                    >
                      {event.name}
                      <motion.div
                        className={"absolute bottom-0 left-0 right-0 h-0.5 bg-theme1Dark1"}
                        initial={{ scaleX: 0 }}
                        variants={{
                          hover: { scaleX: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className={`relative lg:hidden inline-block ${showDialog ? "text-theme1Dark1" : ""}`}
      >
        <div
          className="inline-flex items-center cursor-pointer gap-1"
          onClick={handleDialog}
        >
          <span>OUR EVENTS</span>
          <WrapperArrow isOpen={showDialog} />
        </div>
        <AnimatePresence>
          {showDialog && (
            <motion.div
              className="mt-6 flex flex-col gap-y-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.7, type: "spring", ease: "linear" }}
            >
              {events.map((event, index) => (
                <Link
                  key={index}
                  className="cursor-pointer"
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                >
                  <motion.div
                    className={`relative inline ${hoverEffect}`}
                    whileHover="hover"
                    initial="initial"
                    variants={{
                      initial: { color: "theme1Dark1" },
                    }}
                  >
                    {event.name}
                    <motion.div
                      className={"absolute bottom-0 left-0 right-0 h-0.5 bg-theme1Dark1"}
                      initial={{ scaleX: 0 }}
                      variants={{
                        hover: { scaleX: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NavBar;
