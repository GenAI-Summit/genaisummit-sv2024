const CardLayout = ({ children }) => {
  return (
    <div className="w-full h-full pt-[2.5px] bg-gradient-to-r from-color1 to-color2 shadow-lg rounded-lg">
      <div className="w-full h-full bg-colorCardBg p-4">{children}</div>
    </div>
  );
};

export default CardLayout;
