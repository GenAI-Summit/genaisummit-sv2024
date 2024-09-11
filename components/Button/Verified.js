const Verified = () => {
  const onClick = () => {
    window.open(
      "https://whova.com/portal/registration/genai_202405/7zyww8zo",
      "_blank"
    );
  };

  return (
    <button onClick={onClick} className="relative group z-0">
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3"></div>
      <div className="m-[1.5px] rounded-full bg-theme1Dark1 px-4 py-2 transition ease-in-out duration-300 group-hover:bg-gray-800">
        <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text font-light text-transparent">
          Verified
        </span>
      </div>
    </button>
  );
};

export default Verified;