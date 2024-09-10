const School = ({ width = 30, height = 30, color = "theme1Light1" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-${color}`}
    >
      <path
        d="M2 12L15 5L28 12L15 19L2 12Z"
        className="stroke-current"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 15V22C21 22 18.5 25 15 25C11.5 25 9 22 9 22V15"
        className="stroke-current"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 12V20"
        className="stroke-current"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 22H30"
        className="stroke-current"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default School;
