const Drawer = ({ children, isDrawerOpen, closeDrawer }) => {
  return (
    <div
      className={
        " fixed overflow-hidden bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out z-50 " +
        (isDrawerOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0 "
          : " transition-all delay-500 opacity-0 translate-x-full ")
      }
    >
      <div
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isDrawerOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="relative w-screen max-w-lg p-7 flex flex-col space-y-6 overflow-y-scroll h-full">
          <button
            className="fixed top-1 left-2 text-xl z-50 border-2 border-black rounded-full p-1"
            onClick={closeDrawer}
          >
            X
          </button>
          {children}
        </div>
      </div>
      <div
        className=" w-screen h-full cursor-pointer "
        onClick={closeDrawer}
      ></div>
    </div>
  );
};

export default Drawer;
