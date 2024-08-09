const RegisterBtn = ({ onClick, text = "Register" }) => {
  return (
    <button
      data-tally-layout="modal"
      data-tally-open="nPl9xe"
      data-tally-width="700"
      data-tally-emoji-text="👋"
      data-tally-emoji-animation="wave"
      data-tally-auto-close="3000"
      className="bg-color1 hover:bg-color2 text-color7 py-2 px-4 font-bold rounded ease-in-out duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default RegisterBtn;
