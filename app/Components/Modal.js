import Close from "./SVG/Close";

const Modal = ({ children, isModalOpen, closeModal }) => {
  if (!isModalOpen) return null;

  return (
    <div
      className={`
        fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full
        flex items-center justify-center transition-opacity duration-300 ease-in-out z-50
        ${isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      onClick={closeModal}
    >
      <div
        className={`
          bg-theme1Dark3 w-full max-w-md m-4 rounded-lg shadow-xl
          transform transition-all duration-300 ease-in-out
          ${isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6">
          <button className="fixed top-3 right-3" onClick={closeModal}>
            <Close color="stroke-theme1Light1" />
          </button>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
