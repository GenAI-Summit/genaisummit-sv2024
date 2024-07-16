const CardLayout = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-2 border-2 border-white hover:border-sky-500 ease-in-out duration-300">
      {children}
    </div>
  );
};

export default CardLayout;
