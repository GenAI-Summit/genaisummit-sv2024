import { useEffect, useRef } from "react";
import Close from "@/components/SVG/Close";
import ModalEnter from "@/motions/ModalEnter";

const Modal = ({
  children,
  isModalOpen,
  closeModal,
  title,
  maxWidth = "max-w-[90vw] md:max-w-md",
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isModalOpen]);

  if (!isModalOpen) {
    return null;
  }

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <div
      ref={modalRef}
      className={`
        fixed inset-0 bg-gray-900 bg-opacity-50 h-full w-full
        flex items-center justify-center transition-opacity duration-300 ease-in-out z-50
        ${isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      onClick={closeModal}
      onKeyDown={onKeyDown}
      tabIndex={-1}
    >
      <ModalEnter>
        <div
          className={`
          max-h-[90vh]
          w-full ${maxWidth} m-4 rounded-lg shadow-xl
          transform transition-all duration-300 ease-in-out
          ${isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-gradient-to-r from-theme1Color1 via-theme1Color2 to-theme1Color3 pt-[2.5px] rounded-lg">
            <div className="w-full h-full px-4 py-8 bg-theme1Dark3 rounded-lg">
              <div className="fixed top-4 text-xl font-bold">{title}</div>
              <button className="fixed top-4 right-4" onClick={closeModal}>
                <Close color="stroke-theme1Light1" />
              </button>
              <div className="max-h-[90vh] mt-8 p-2 overflow-y-auto">
                {children}
              </div>
            </div>
          </div>
        </div>
      </ModalEnter>
    </div>
  );
};

export default Modal;
