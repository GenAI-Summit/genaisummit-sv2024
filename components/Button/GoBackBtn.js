import { useRouter } from "next/navigation";

const GoBackBtn = () => {
  const router = useRouter();
  
  const onGoBack = () => {
    // Check if the history stack is empty
    if (window.history.length <= 1) {
      // If empty, navigate to the home page
      router.push("/");
    } else {
      // Otherwise, go back as before
      router.back();
    }
  };

  return (
    <button onClick={onGoBack} className="relative group z-0">
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3"></div>
      <div className="m-[1.5px] rounded-full bg-theme1Dark1 px-4 py-2 transition ease-in-out duration-300 group-hover:bg-gray-800">
        <span className="h-full w-full rounded-full bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text font-light text-transparent">
          Go Back
        </span>
      </div>
    </button>
  );
};

export default GoBackBtn;
