"use client";

import { useRouter } from "next/navigation";

const TicketBtn = () => {
  const router = useRouter();

  const onBuyTickets = () => {
    router.push("/tickets");
  };

  return (
    <button
      className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded ease-in-out duration-300"
      onClick={onBuyTickets}
    >
      Buy Tickets
    </button>
  );
};

export default TicketBtn;
