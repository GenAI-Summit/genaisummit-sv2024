import Link from "next/link";

const SubscribeBtn = ({ width }) => {
  return (
    <Link href="/subscription" target="_blank">
      <button
        className={`bg-color1 hover-bolor2 text-color7 font-bold py-2 px-4 rounded ease-in-out duration-300 ${width}`}
      >
        Get Updates
      </button>
    </Link>
  );
};

export default SubscribeBtn;
