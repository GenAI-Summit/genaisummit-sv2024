import { Suspense } from "react";
import CardLayout from "../Layouts/CardLayout";
import TicketBtn from "./Button/TicketBtn";
import Loader from "./Loader";

const IndexTicketCard = ({ ticket }) => {
  return (
    <>
      <div className="group/stripe relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-[50%] transition-opacity duration-300 ease-in-out opacity-50 rounded-lg overflow-hidden group-hover/stripe:opacity-100">
          <span
            className={`absolute top-8 right-[-3.75rem] inline-block w-52 h-8 leading-8 text-center text-white text-base font-normal 
                         transform rotate-45 border border-dashed border-white shadow-md bg-emerald-600
                         after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-10`}
          >
            Early Bird
          </span>
        </div>
        <CardLayout bgColor="bg-theme1Dark2">
          <div className="relative h-full w-full flex flex-col items-center justify-between text-center gap-4 p-4 rounded-lg">
            <div className="w-full flex flex-col gap-y-4 rounded-lg">
              <h1 className="text-2xl font-semibold bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text text-transparent">
                {ticket.name}
              </h1>
              {ticket.description.map((desc, index) => (
                <p
                  key={index}
                  className="text-base text-theme1Light1 leading-6"
                >
                  {desc}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-1">
                <p className="line-through text-theme1Gray1">
                  ${ticket.originalPrice}
                </p>
                <p className="text-2xl font-bold bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text text-transparent">
                  ${ticket.price}
                </p>
                <p className="text-sm text-theme1Gray1">
                  <span>{ticket.saveText}</span>
                </p>
              </div>
              <Suspense fallback={<Loader />}>
                <TicketBtn
                  mode="modal"
                  platforms={ticket.platforms}
                  evt={`Ticket Card - ${ticket.name} Button`}
                />
              </Suspense>
            </div>
          </div>
        </CardLayout>
      </div>
    </>
  );
};

export default IndexTicketCard;
