const ResetBtn = ({ onReset }) => {
  return (
    <button
      className="bg-color1 text-color7 font-bold py-2 px-4 rounded-lg hover:bg-color2 ease-in-out duration-300"
      onClick={onReset}
    >
      Reset
    </button>
  );
};

export default ResetBtn;
