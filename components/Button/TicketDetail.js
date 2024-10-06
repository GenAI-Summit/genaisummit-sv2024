"use client";

import { useState } from "react";
import Modal from "../Modal";

const TicketDetail = ({ ticket, evt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const umamiTrack = (evt) => {
    window?.umami?.track(evt);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClick = (e) => {
    e.stopPropagation();
    openModal();
    umamiTrack(evt);
  };

  return (
    <>
      <button className="relative group z-0" onClick={onClick}>
        <div className="rounded-full bg-transparent px-4 py-2 transition-colors duration-300 hover:bg-theme1Dark3 border-[1.5px] border-theme1Light1">
          <span className="h-full w-full rounded-full font-light text-theme1Light1">
            What{"'"}s included?
          </span>
        </div>
      </button>
      <Modal
        title="Ticket Details"
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        maxWidth="max-w-6xl"
      >
        <div className="flex flex-col md:flex-row items-start justify-between gap-y-6 md:gap-x-4">
          <div className="flex flex-col items-start justify-between text-left gap-y-6">
            <h3 className="text-theme1Light1 font-bold text-2xl">Type A - $5999</h3>
            {ticket.benefits[0].map((benefit, index) => (
              <p key={index} className="text-theme1Light1">
                {index + 1}. {benefit}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-start justify-between text-left gap-y-6">
            <h3 className="text-theme1Light1 font-bold text-2xl">Type B - $3999</h3>
            {ticket.benefits[1].map((benefit, index) => (
              <p key={index} className="text-theme1Light1">
                {index + 1}. {benefit}
              </p>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TicketDetail;
