import CardLayout from "../Layouts/CardLayout";
import TicketBtn from "./TicketBtn";

const IndexTicketCard = ({ ticket }) => {
  return (
    <CardLayout>
      <div className="h-full w-full flex flex-col items-center justify-center text-center text-cardTextPrimary gap-4 p-4 border border-cardBorder rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold">{ticket.name}</h1>
        <p className="text-base text-cardTextSecondary">{ticket.description}</p>
        <div className="mt-auto">
          {" "}
          <p className="text-xl font-bold">${ticket.price}</p>
          <p className="text-sm text-cardTextSecondary">
            <span className="line-through">${ticket.originalPrice}</span>{" "}
            <span>{ticket.saveText}</span>
          </p>
        </div>
        <TicketBtn />
      </div>
    </CardLayout>
  );
};

export default IndexTicketCard;
