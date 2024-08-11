import Link from "next/link";

const TicketBtn = ({ width }) => {
  return (
    <Link
      href="https://whova.com/portal/registration/genai_202405/"
      target="_blank"
    >
      <button
        className={`
          bg-color1 hover:bg-color2 text-color7 font-bold py-2 px-4 rounded ease-in-out duration-300 ${width ? width : ""}`}
      >
        Buy Tickets
      </button>
    </Link>
  );
};

export default TicketBtn;
