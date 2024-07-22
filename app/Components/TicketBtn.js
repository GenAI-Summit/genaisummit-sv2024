"use client";

import { useRouter } from "next/navigation";

const TicketBtn = () => {
  const router = useRouter();

  const onBuyTickets = () => {
    router.push("/tickets");
  };

  return (
    <button
      className="bg-btnPrimary hover:bg-btnHoverPrimary text-btnTextPrimary font-bold py-2 px-4 rounded ease-in-out duration-300"
      onClick={onBuyTickets}
    >
      Buy Tickets
    </button>
  );
};

export default TicketBtn;
