"use client";
import { useRouter } from "next/navigation";

const ShowMore = ({ target, text = "Show More" }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(target);
  };
  return (
    <button
      className="bg-color1 hover:bg-color2 text-color7 font-bold py-2 px-4 rounded ease-in-out duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ShowMore;
