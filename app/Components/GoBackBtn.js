import { useRouter } from "next/navigation";

const GoBackBtn = () => {
  const router = useRouter();
  const onGoBack = () => {
    router.back();
  };
  return (
    <button
      onClick={onGoBack}
      className="bg-color1 hover:bg-color2 text-color7 font-bold py-2 px-4 rounded ease-in-out duration-300"
    >
      Go Back
    </button>
  );
};

export default GoBackBtn;
