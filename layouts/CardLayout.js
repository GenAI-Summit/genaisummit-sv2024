const CardLayout = ({ children, bgColor = "bg-theme1Light1" }) => {
  return (
    <div className="w-full h-full pt-[2.5px] bg-gradient-to-r from-theme1Color1 via-theme1Color2 to-theme1Color3 shadow-lg rounded-lg">
      <div className={`w-full h-full p-4 rounded-lg ${bgColor}`}>
        {children}
      </div>
    </div>
  );
};

export default CardLayout;
