const EduSummit = ({ onSubmit, cooldown }) => {

  const umamiTrack = (evt) => {
    if (cooldown === 0) {
      window?.umami?.track(evt);
    }
  };

  return (
    <button
      className="w-64 group relative z-0"
      onClick={() => {
        onSubmit();
        umamiTrack("Student Verification - Verify");
      }}
      disabled={cooldown > 0}
    >
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3"></div>
      <div className="m-[1.5px] rounded-full bg-theme1Dark1 px-4 py-2 transition duration-300 group-hover:bg-gray-800">
        <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text font-light text-transparent">
          {cooldown > 0 ? `Resend in ${cooldown} seconds` : "Verify"}
        </span>
      </div>
    </button>
  );
};

export default EduSummit;