import Link from "next/link";
import DropDowm from "../../Motions/DropDown";
import { motion } from "framer-motion";
import WrapperArrow from "../SVG/WrapperArrow";

const NavBar = ({
  closeDrawer,
  openDialog,
  closeDialog,
  showDialog,
  handleDialog,
}) => {
  const prevEvents = [
    {
      name: "GenAI Summit SF 2024",
      url: "https://sf2024.genaisummit.ai/",
    },
    {
      name: "GenAI Summit SV 2023",
      url: "https://sv2023.genaisummit.ai/",
    },
    {
      name: "Asian American Pioneer Medal",
      url: "https://whova.com/web/%40T7QrhsNC554UYE6QJFdroR4bM1b%40T66riJ8tOCVLsk%3D/",
    },
  ];

  return (
    <>
      <div
        className="hidden lg:inline-block"
        onMouseOver={openDialog}
        onMouseLeave={closeDialog}
      >
        <div className="inline-flex items-center gap-1 cursor-pointer">
          PREVIOUS EVENTS
        </div>
        {showDialog && (
          <div className="absolute top-10 right-[12.5%] bg-color8 shadow-lg rounded-md z-10 py-4 px-6">
            {prevEvents.map((event, index) => (
              <div key={index} className="block p-2">
                <Link
                  href={event.url}
                  className="cursor-pointer text-colorNavBarText"
                  target="_blank"
                  onClick={closeDrawer}
                >
                  <motion.span
                    className="relative"
                    whileHover="hover"
                    initial="initial"
                    variants={{
                      initial: { color: "colorNavBarText" },
                    }}
                  >
                    {event.name}

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-colorNavBarText"
                      initial={{ scaleX: 0 }}
                      variants={{
                        hover: { scaleX: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className={`relative lg:hidden inline-block ${showDialog ? "text-color1" : ""}`}
      >
        <div
          className="inline-flex items-center cursor-pointer gap-1 text-color6"
          onClick={handleDialog}
        >
          <span>PREVIOUS EVENT</span>
          <WrapperArrow isOpen={showDialog} />
        </div>
        <DropDowm isOpen={showDialog}>
          {showDialog && (
            <div className="mt-6 flex flex-col gap-y-6">
              {prevEvents.map((event, index) => (
                <div key={index} className="block">
                  <Link
                    href={event.url}
                    target="_blank"
                    className="text-colorNavBarText"
                  >
                    <motion.span
                      className="relative"
                      whileHover="hover"
                      initial="initial"
                      variants={{
                        initial: { color: "colorNavBarText" },
                      }}
                    >
                      {event.name}

                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-colorNavBarText"
                        initial={{ scaleX: 0 }}
                        variants={{
                          hover: { scaleX: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </DropDowm>
      </div>
    </>
  );
};

export default NavBar;
