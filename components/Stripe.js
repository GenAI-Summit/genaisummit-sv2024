const Stripe = ({ children, text }) => {
  return (
    <div className="group/stripe relative w-full h-full">
      <div className="absolute top-0 left-0 w-full h-[50%] transition-opacity duration-300 ease-in-out opacity-50 rounded-lg overflow-hidden group-hover/stripe:opacity-100">
        <span
          className={`absolute top-8 right-[-3.75rem] inline-block w-52 h-8 leading-8 text-center text-white text-base font-normal 
                   transform rotate-45 border border-dashed border-white shadow-md bg-emerald-600
                   after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-10`}
        >
          {text}
        </span>
      </div>
      {children}
    </div>
  );
};

export default Stripe;
