"use client";

import { useState, Suspense } from "react";
import Loader from "../Loader";
import Modal from "../Modal";
import TextToMarkdown from "../TextToMarkdown";

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
      <button className="w-44 relative group z-0" onClick={onClick}>
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
        maxWidth="max-w-[90vw] md:max-w-6xl"
      >
        <Suspense fallback={<Loader />}>
          <TextToMarkdown text={ticket.benefits} />
        </Suspense>
      </Modal>
    </>
  );
};

export default TicketDetail;
