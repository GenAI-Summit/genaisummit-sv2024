const RegisterBtn = ({ onClick, text = "Register", mode }) => {
  if (mode === "day") {
    return (
      <button
        data-tally-layout="modal"
        data-tally-open="nPl9xe"
        data-tally-width="700"
        data-tally-emoji-text="👋"
        data-tally-emoji-animation="wave"
        data-tally-auto-close="3000"
        className="relative group z-0"
        onClick={onClick}
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-theme1BtnColor3"></div>
        <div className="m-[1.5px] rounded-full bg-theme1BtnBgGhost px-4 py-2 transition-all ease-in-out duration-300 group-hover:bg-gradient-to-br group-hover:from-theme1BtnColor1 group-hover:via-theme1BtnColor2 group-hover:to-theme1BtnColor3">
          <span className="w-full h-full rouonded-full bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-theme1BtnColor3 bg-clip-text text-transparent group-hover:text-theme1BtnTextLight transition-all ease-in-out duration-300 font-bold">
            {text}
          </span>
        </div>
      </button>
    );
  }
  return (
    <button
      data-tally-layout="modal"
      data-tally-open="nPl9xe"
      data-tally-width="700"
      data-tally-emoji-text="👋"
      data-tally-emoji-animation="wave"
      data-tally-auto-close="3000"
      className="relative group z-0"
      onClick={onClick}
    >
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-theme1BtnColor3"></div>
      <div className="m-[1.5px] rounded-full bg-theme1BtnNightBg px-4 py-2 transition-all duration-300 hover:bg-gray-700">
        <span className="w-full h-full rouonded-full bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-themeBtnColor3 bg-clip-text text-transparent font-bold">
          {text}
        </span>
      </div>
    </button>
  );
};

export default RegisterBtn;
