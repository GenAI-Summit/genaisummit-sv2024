import { useRouter } from "next/navigation";

const GoBackBtn = () => {
  const router = useRouter();
  const onGoBack = () => {
    router.back();
  };
  return (
    <button onClick={onGoBack} className="relative group z-0">
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-color1 to-color2"></div>
      <div className="m-[1.5px] rounded-full bg-color6 px-4 py-2 transition-colors duration-300 hover:bg-gray-700">
        <span className="h-full w-full rounded-full bg-gradient-to-br from-color1 to-color2 bg-clip-text font-light text-transparent">
          Go Back
        </span>
      </div>
    </button>
  );
};

export default GoBackBtn;
