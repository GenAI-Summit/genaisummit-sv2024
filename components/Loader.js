const Loader = ({ color = "border-theme1Light1" }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className={`w-10 h-10 border-t-2 border-b-2 ${color} rounded-full animate-spin`}></div>
    </div>
  );
};

export default Loader;
