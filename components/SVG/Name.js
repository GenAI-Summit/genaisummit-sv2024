export const FirstName = ({ width = 30, height = 30, color = "theme1Light1" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-${color}`}
    >
      <path d="M5 5H25V10H10V15H20V20H10V25H5V5Z" className="stroke-current" />
    </svg>
  );
};

export const LastName = ({ width = 30, height = 30, color = "theme1Light1" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-${color}`}
    >
      <path d="M5 5V25H25V20H10V5H5Z" className="stroke-current" />
    </svg>
  );
};