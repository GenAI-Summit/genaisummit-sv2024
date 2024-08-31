const CheckBox = ({ label, checked }) => {
  return (
    <div className="inline-block flex items-center gap-3 cursor-pointer text-theme1Light1">
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="20" height="20" rx="2" stroke-width="2" />
        <path
          className={`${checked ? "" : "hidden"}`}
          d="M5 12 L10 17 L19 8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span className="text-lg">{label.length === 0 ? "TBD" : label}</span>
    </div>
  );
};

export default CheckBox;
