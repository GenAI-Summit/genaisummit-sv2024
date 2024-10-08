import { useRef, useEffect } from "react";
import Close from "@/components/SVG/Close";
import DrawerEnter from "@/motions/DrawerEnter";

const Drawer = ({ children, isDrawerOpen, closeDrawer }) => {
  const drawerRef = useRef(null);
  
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };
    
    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
    };
    
    const handleTouchEnd = () => {
      if (touchStartX < touchEndX && touchEndX - touchStartX > 75) {
        closeDrawer();
      }
    };
    
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isDrawerOpen) {
        closeDrawer();
      }
    };

    const drawer = drawerRef.current;
    if (drawer) {
      drawer.addEventListener("touchstart", handleTouchStart);
      drawer.addEventListener("touchmove", handleTouchMove);
      drawer.addEventListener("touchend", handleTouchEnd);
      window.addEventListener("keydown", handleKeyDown);
    }
    
    return () => {
      if (drawer) {
        drawer.removeEventListener("touchstart", handleTouchStart);
        drawer.removeEventListener("touchmove", handleTouchMove);
        drawer.removeEventListener("touchend", handleTouchEnd);
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [closeDrawer, isDrawerOpen]);

  return (
    <div
      className={
        " fixed overflow-hidden bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out z-50 text-theme1Light1 " +
        (isDrawerOpen
          ? " opacity-100 translate-x-0 "
          : " opacity-0 translate-x-full ")
      }
    >
      <DrawerEnter isOpen={isDrawerOpen}>
        <div
          ref={drawerRef}
          className={
            " w-screen max-w-lg fixed right-0 top-[10%] bg-theme1Dark2 h-[80%] shadow-lg rounded-lg transform  "
          }
        >
          <div className="relative w-screen max-w-lg p-7 flex flex-col space-y-6 overflow-y-scroll h-full">
            <button
              className="fixed top-3 left-3 text-xl z-50"
              onClick={closeDrawer}
            >
              <Close color="stroke-theme1Light1" />
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
