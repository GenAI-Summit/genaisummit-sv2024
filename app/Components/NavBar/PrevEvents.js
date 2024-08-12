import Link from "next/link";
import Triangle from "../SVG/Triangle";
import DropDowm from "../../Motions/DropDown";

const NavBar = ({
  hoverEffect,
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
        className={`${hoverEffect} hidden md:inline-block cursor-pointer`}
        onMouseOver={openDialog}
        onMouseLeave={closeDialog}
      >
        <div className="inline-flex items-center gap-1">
          PREVIOUS EVENTS
          <div className="inline-block">
            <Triangle isOpen={showDialog} />
          </div>
        </div>
        {showDialog && (
          <div className="absolute bg-color7 shadow-md rounded-md z-10">
            {prevEvents.map((event, index) => (
              <Link
                key={index}
                className="block p-2 rounded text-color1 hover:text-color2 ease-in-out duration-300"
                href={event.url}
                target="_blank"
                onClick={closeDrawer}
              >
                {event.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div
        className={`relative md:hidden inline-block ${showDialog ? "text-color1" : ""}`}
      >
        <div
          className="inline-flex items-center cursor-pointer gap-1"
          onClick={handleDialog}
        >
          PREVIOUS EVENT
          <div className="inline-block">
            <Triangle isOpen={showDialog} />
          </div>
        </div>
        <DropDowm isOpen={showDialog}>
          {showDialog && (
            <div className="mt-4 flex flex-col gap-y-4">
              {prevEvents.map((event, index) => (
                <Link
                  key={index}
                  className="block p-2 rounded text-color7 hover:text-color1 ease-in-out duration-300"
                  href={event.url}
                  target="_blank"
                >
                  {event.name}
                </Link>
              ))}
            </div>
          )}
        </DropDowm>
      </div>
    </>
  );
};

export default NavBar;
