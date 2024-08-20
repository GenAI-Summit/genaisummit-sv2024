const CardLayout = ({ children }) => {
  return (
    <div className="w-full h-full pt-[2.5px] bg-gradient-to-r from-theme1CardBorderColor1 via-theme1CardBorderColor2 to-theme1CardBorderColor3 shadow-lg rounded-lg">
      <div className="w-full h-full bg-theme1CardBg p-4 rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default CardLayout;
