import { useRouter } from "next/navigation";

const GoBackBtn = () => {
  const router = useRouter();
  const onGoBack = () => {
    router.back();
  };
  return (
    <button onClick={onGoBack} className="relative group z-0">
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-color1 to-color2"></div>
      <div className="m-[1.5px] rounded-full bg-color8 px-4 py-2 transition ease-in-out duration-300 group-hover:bg-gradient-to-br group-hover:from-color1 group-hover:to-color2">
        <span className="h-full w-full rounded-full bg-gradient-to-br from-color1 to-color2 bg-clip-text font-light text-transparent group-hover:text-color8 transition ease-in-out duration-300">
          Go Back
        </span>
      </div>
    </button>
  );
};

export default GoBackBtn;
