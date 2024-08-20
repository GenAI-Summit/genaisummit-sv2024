import DropDown from "../../Motions/DropDown";
import TextHover from "../../Motions/TextHover";
import WrapperArrow from "../SVG/WrapperArrow";

const NavBar = ({ openDialog, closeDialog, showDialog, handleDialog }) => {
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

  const openUrl = (url) => {
    window.open(url, "_blank");
  };

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
          <DropDown isOpen={showDialog}>
            <div className="absolute top-10 right-[13%] pt-[2.5px] bg-gradient-to-r from-theme1Color1 via-theme1Color2 to-theme1Color3 shadow-lg rounded-lg z-30">
              <div className="w-full h-full bg-color8 z-40 py-4 px-6 rounded-lg">
                {prevEvents.map((event, index) => (
                  <p
                    key={index}
                    className="cursor-pointer p-2"
                    onClick={() => openUrl(event.url)}
                  >
                    <TextHover color="theme1Dark1">{event.name}</TextHover>
                  </p>
                ))}
              </div>
            </div>
          </DropDown>
        )}
      </div>

      <div
        className={`relative lg:hidden inline-block ${showDialog ? "text-theme1Dark1" : ""}`}
      >
        <div
          className="inline-flex items-center cursor-pointer gap-1"
          onClick={handleDialog}
        >
          <span>PREVIOUS EVENT</span>
          <WrapperArrow isOpen={showDialog} />
        </div>
        {showDialog && (
          <DropDown isOpen={showDialog}>
            <div className="mt-6 flex flex-col gap-y-6">
              {prevEvents.map((event, index) => (
                <p
                  key={index}
                  className="cursor-pointer"
                  onClick={() => openUrl(event.url)}
                >
                  <TextHover color="theme1Dark1">{event.name}</TextHover>
                </p>
              ))}
            </div>
          </DropDown>
        )}
      </div>
    </>
  );
};

export default NavBar;
