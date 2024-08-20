const ResetBtn = ({ onReset }) => {
  return (
    <button className="group relative z-0" onClick={onReset}>
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-theme1BtnColor3"></div>
      <div className="m-[1.5px] rounded-full bg-theme1BtnBgGhost px-4 py-2 transition duration-300 group-hover:bg-gradient-to-br group-hover:from-theme1BtnColor1 group-hover:via-theme1BtnColor2 group-hover:to-theme1BtnColor3">
        <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-theme1BtnColor3 bg-clip-text font-bold text-transparent group-hover:text-theme1BtnTextLight transition duration-300">
          Reset
        </span>
      </div>
    </button>
  );
};

export default ResetBtn;
