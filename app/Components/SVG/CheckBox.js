const CheckBox = ({ label, checked }) => {
  return (
    <div
      className={`flex items-center gap-1 cursor-pointer ${checked ? "text-color2" : "text-color5"}`}
    >
      <svg
        className="w-6 h-6 text-color5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="20" height="20" rx="2" stroke-width="2" />
        <path
          className={`text-color2 ${checked ? "" : "hidden"}`}
          d="M5 12 L10 17 L19 8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className="text-lg">{label.length === 0 ? "TBD" : label}</div>
    </div>
  );
};

export default CheckBox;
