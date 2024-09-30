import { Suspense } from "react";
import CardLayout from "@/layouts/CardLayout";
import TicketBtn from "@/components/Button/TicketBtn";
import TicketDetail from "@/components/Button/TicketDetail";
import Loader from "@/components/Loader";

const TicketCard = ({ ticket }) => {
  return (
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
        <div className="flex flex-col gap-y-4 items-center">
          <div className="flex flex-col gap-y-1">
            <p className="line-through text-theme1Gray1">
              {ticket.originalPrice ? `$${ticket.originalPrice}` : ""}
            </p>
            <p className="text-2xl font-bold bg-gradient-to-br from-theme1Color1 via-theme1Color2 to-theme1Color3 bg-clip-text text-transparent">
              {ticket.price ? `$${ticket.price}` : ""}
            </p>
            <p className="text-sm text-theme1Gray1">
              <span>{ticket.saveText}</span>
            </p>
          </div>
          {
            ticket.name.includes("Booth") ? (
              <Suspense fallback={<Loader />}>
                <TicketBtn
                  mode="night"
                  evt={`Ticket Card - ${ticket.name} Button`}
                  text={ticket.btnText}
                  url="https://whova.com/portal/registration/genai_202405/exhibitor"
                />
              </Suspense>
            ) :

              <Suspense fallback={<Loader />}>
                <TicketBtn
                  mode="modal"
                  platforms={ticket.platforms}
                  evt={`Ticket Card - ${ticket.name} Button`}
                  text={ticket.btnText}
                  ModalDescription={
                    ticket.ModalDescription ? ticket.ModalDescription : null
                  }
                />
              </Suspense>
          }
          {ticket.benefits && (
            <Suspense fallback={<Loader />}>
              <TicketDetail
                ticket={ticket}
                evt={`Ticket Card - ${ticket.name} Details`}
              />
            </Suspense>
          )}
        </div>
      </div>
    </CardLayout>
  );
};

export default TicketCard;
