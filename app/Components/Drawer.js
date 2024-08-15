import Close from "./SVG/Close";
import DrawerEnter from "../Motions/DrawerEnter";

const Drawer = ({ children, isDrawerOpen, closeDrawer }) => {
  return (
    <div
      className={
        " fixed overflow-hidden bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out z-50 text-color6 " +
        (isDrawerOpen
          ? " opacity-100 translate-x-0 "
          : " opacity-0 translate-x-full ")
      }
    >
      <DrawerEnter isOpen={isDrawerOpen}>
        <div
          className={
            " w-screen max-w-lg fixed right-0 top-[5%] bg-color13 h-[90%] shadow-lg rounded-lg transform  "
          }
        >
          <div className="relative w-screen max-w-lg p-7 flex flex-col space-y-6 overflow-y-scroll h-full">
            <button
              className="fixed top-3 left-3 text-xl z-50"
              onClick={closeDrawer}
            >
              <Close />
            </button>
            {children}
          </div>
        </div>
        <div
          className=" w-screen h-full cursor-pointer "
          onClick={closeDrawer}
        ></div>
      </DrawerEnter>
    </div>
  );
};

export default Drawer;
