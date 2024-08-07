const Close = () => {
  return (
    <svg
      className="w-8 h-8 transition-all duration-300 ease-in-out group"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="15"
        className="fill-color7 stroke-color5 group-hover:stroke-color1 transition-all duration-300 ease-in-out"
        strokeWidth="2"
      />
      <path
        d="M10 10 L22 22 M10 22 L22 10"
        className="stroke-color5 group-hover:stroke-color1 transition-all duration-300 ease-in-out"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Close;
