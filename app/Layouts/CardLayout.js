const CardLayout = ({ children }) => {
  return (
    <div className="w-full h-full bg-colorCardBg shadow-lg rounded-lg p-4">
      {children}
    </div>
  );
};

export default CardLayout;
