import CardLayout from "../../Layouts/CardLayout";
import TicketBtn from "../Button/TicketBtn";

const IndexTicketCard = ({ ticket }) => {
  return (
    <CardLayout>
      <div className="group/stripe relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-[50%] transition-opacity duration-300 ease-in-out opacity-50 overflow-hidden group-hover/stripe:opacity-100">
          <span
            className={`absolute top-8 right-[-3.75rem] inline-block w-52 h-8 leading-8 text-center text-white text-base font-normal 
                         transform rotate-45 border border-dashed border-white shadow-md bg-emerald-600
                         after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-10`}
          >
            Early Bird
          </span>
        </div>
        <div className="relative h-full w-full flex flex-col items-center justify-center text-center text-color5 gap-4 p-4 border border-color12/[0.1] rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold text-color10">{ticket.name}</h1>
          {ticket.description.map((desc, index) => (
            <p key={index} className="text-base text-color6 leading-6">
              {desc}
            </p>
          ))}
          <div className="mt-6 flex flex-col gap-y-2">
            {" "}
            <p className="line-through text-color7">${ticket.originalPrice}</p>
            <p className="text-2xl font-bold bg-gradient-to-br from-color1 to-color2 bg-clip-text text-transparent">
              ${ticket.price}
            </p>
            <p className="text-sm text-color7">
              <span>{ticket.saveText}</span>
            </p>
          </div>
          <TicketBtn mode="day" />
        </div>
      </div>
    </CardLayout>
  );
};

export default IndexTicketCard;
