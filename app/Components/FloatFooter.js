import TicketBtn from "./TicketBtn";

const FloatFooter = () => {
  return (
    <div className="fixed bottom-0 w-full bg-footerBg text-footerText p-4 shadow-lg md:hidden flex justify-between items-center z-40">
      <span className="font-bold">$179 – $9,999</span>
      <TicketBtn />
    </div>
  );
};

export default FloatFooter;
