import Link from "next/link";
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
        className={"hidden lg:inline-block"}
        onMouseOver={openDialog}
        onMouseLeave={closeDialog}
      >
        <div
          className={`inline-flex items-center gap-1 cursor-pointer ${hoverEffect}`}
        >
          PREVIOUS EVENTS
        </div>
        {showDialog && (
          <div className="absolute bg-color8 shadow-lg rounded-md z-10 py-4 px-6">
            {prevEvents.map((event, index) => (
              <div key={index} className="block p-2">
                <Link
                  href={event.url}
                  className="cursor-pointer text-color6 hover:font-semibold ease-in-out duration-300"
                  target="_blank"
                  onClick={closeDrawer}
                >
                  {event.name}
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
          className={`inline-flex items-center cursor-pointer gap-1 text-color6 ease-in-out duration-300 ${hoverEffect}`}
          onClick={handleDialog}
        >
          PREVIOUS EVENT
        </div>
        <DropDowm isOpen={showDialog}>
          {showDialog && (
            <div className="mt-6 flex flex-col gap-y-6">
              {prevEvents.map((event, index) => (
                <div key={index} className="block">
                  <Link
                    className="text-color6 hover:font-semibold ease-in-out duration-300"
                    href={event.url}
                    target="_blank"
                  >
                    {event.name}
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
