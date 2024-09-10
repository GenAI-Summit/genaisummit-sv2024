const Email = ({ width = 30, height = 30, color = "theme1Light1" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-${color}`}
    >
      <rect x="2" y="5" width="26" height="20" rx="2" className="stroke-current" strokeWidth="1"/>
      <path d="M2 7L15 16L28 7" className="stroke-current" strokeWidth="1"/>
    </svg>
  );
};

export default Email;