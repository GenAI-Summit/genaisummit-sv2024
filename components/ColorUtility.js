const ColorUtility = () => {
  return (
    <div className="hidden">
      <div
        className="bg-platinumBg border-platinumBorder hover:border-platinumBorderHover text-platinumTitle"
      />
      <div className="bg-goldBg border-goldBorder hover:border-goldBorderHover text-goldTitle" />
      <div
        className="bg-silverBg border-silverBorder hover:border-silverBorderHover text-silverTitle"
      />
      <div
        className="bg-specialBg border-specialBorder hover:border-specialBorderHover text-specialTitle"
      />
    </div>
  );
};

export default ColorUtility;