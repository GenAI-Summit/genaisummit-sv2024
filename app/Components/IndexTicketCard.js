import CardLayout from "../Layouts/CardLayout";
import TicketBtn from "./TicketBtn";

const IndexTicketCard = ({ ticket }) => {
  return (
    <CardLayout>
      <div className="h-full w-full flex flex-col items-center justify-center text-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold">{ticket.name}</h1>
        <p className="text-base text-gray-500">{ticket.description}</p>
        <div className="mt-auto">
          {" "}
          <p className="text-xl font-bold">${ticket.price}</p>
          <p className="text-sm text-gray-500">
            <span className="line-through">${ticket.originalPrice}</span>{" "}
            <span className="text-sm text-gray-500">{ticket.saveText}</span>
          </p>
        </div>
        <TicketBtn />
      </div>
    </CardLayout>
  );
};

export default IndexTicketCard;
