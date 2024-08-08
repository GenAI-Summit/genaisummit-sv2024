const RegisterBtn = ({ onClick, text = "Register" }) => {
  return (
    <button
      className="bg-color1 hover:bg-color2 text-color7 py-2 px-4 font-bold rounded ease-in-out duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default RegisterBtn;
