const RegisterBtn = ({ onClick, text = "Register" }) => {
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
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-color1 to-color2"></div>
      <div className="m-[1.5px] rounded-full bg-color6 px-4 py-2 transition-all duration-300 hover:bg-gray-700">
        <span className="w-full h-full rouonded-full bg-gradient-to-br from-color1 to-color2 bg-clip-text text-transparent">
          {text}
        </span>
      </div>
    </button>
  );
};

export default RegisterBtn;
