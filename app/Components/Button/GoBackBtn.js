import { useRouter } from "next/navigation";

const GoBackBtn = () => {
  const router = useRouter();
  const onGoBack = () => {
    router.back();
  };
  return (
    <button onClick={onGoBack} className="relative group z-0">
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-theme1BtnColor3"></div>
      <div className="m-[1.5px] rounded-full bg-theme1BtnBgGhost px-4 py-2 transition ease-in-out duration-300 group-hover:bg-gradient-to-br group-hover:from-theme1BtnColor1 group-hover:via-theme1BtnColor2 group-hover:to-theme1BtnColor3">
        <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1BtnColor1 via-theme1BtnColor2 to-themeBtnColor3 bg-clip-text font-bold text-transparent group-hover:text-theme1BtnTextLight transition ease-in-out duration-300">
          Go Back
        </span>
      </div>
    </button>
  );
};

export default GoBackBtn;
