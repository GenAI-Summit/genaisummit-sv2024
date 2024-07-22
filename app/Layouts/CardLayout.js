const CardLayout = ({ children }) => {
  return (
    <div className="w-full h-full bg-cardBgPrimary shadow-md rounded-lg p-4">
      {children}
    </div>
  );
};

export default CardLayout;
