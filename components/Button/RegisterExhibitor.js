import Link from "next/link";

const RegisterExhibitor = () => {
  return (
    <Link
      href="https://whova.com/portal/registration/genai_202405/exhibitor"
      target="_blank"
    >
      <button className="relative group z-0">
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3"></div>
        <div className="m-[1.5px] rounded-full bg-theme1Dark1 px-4 py-2 transition-all ease-in-out duration-300 group-hover:bg-gray-800">
          <span className="w-full h-full rouonded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text text-transparent transition-all ease-in-out duration-300 font-light">
          Become an Exhibitor
          </span>
        </div>
      </button>
    </Link>
  );
};

export default RegisterExhibitor;