import CardLayout from "../Layouts/CardLayout";
import TicketBtn from "./TicketBtn";

const IndexTicketCard = ({ ticket }) => {
  return (
    <CardLayout>
      <div className="h-full w-full flex flex-col items-center justify-center text-center text-color5 gap-4 p-4 border border-color4 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-color1">{ticket.name}</h1>
        {ticket.description.map((desc, index) => (
          <p key={index} className="text-base">
            {desc}
          </p>
        ))}
        <div className="mt-auto">
          {" "}
          <p className="line-through">${ticket.originalPrice}</p>
          <p className="text-2xl font-bold">${ticket.price}</p>
          <p className="text-sm text-color1">
            <span>{ticket.saveText}</span>
          </p>
        </div>
        <TicketBtn />
      </div>
    </CardLayout>
  );
};

export default IndexTicketCard;
