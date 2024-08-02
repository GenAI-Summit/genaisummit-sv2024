"use client";

import React, { useState } from "react";
import Icon from "../Icon";
import NavBarItems from "./NavBarItems";
import TicketBtn from "../TicketBtn";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();

  const openDrawer = () => {
    setIsMenuOpen(true);
  };

  const closeDrawer = () => {
    setIsMenuOpen(false);
  };

  const handleDrawer = () => {
    if (!isMenuOpen) {
      openDrawer();
    } else {
      closeDrawer();
    }
  };

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const handleDialog = () => {
    if (!showDialog) {
      openDialog();
    } else {
      closeDialog();
    }
  };

  const onClickLogo = () => {
    console.log("Clicked on logo");
    router.push("/");
  };

  return (
    <>
      <div className="fixed top-0 px-4 py-2 w-full bg-color5 text-color7 font-semibold flex flex-row justify-around items-center hidden md:flex z-40 border-b-2 border-color1">
        <div className="cursor-pointer" onClick={onClickLogo}>
          <Icon
            src="/images/icons/gptdao3.png"
            alt="logo"
            width="150"
            height="150"
          />
        </div>
        <NavBarItems
          closeDrawer={closeDrawer}
          showDialog={showDialog}
          openDialog={openDialog}
          closeDialog={closeDialog}
          handleDialog={handleDialog}
        />
        <TicketBtn />
      </div>

      <div className="fixed top-0 px-4 py-2 w-full bg-color5 text-color7 font-semibold flex flex-col items-center text-center md:hidden z-40 border-b-2 border-color1">
        <div className="w-full flex flex-row justify-between">
          <div className="cursor-pointer" onClick={onClickLogo}>
            <Icon
              src="/images/icons/gptdao3.png"
              alt="GPTDAO Logo"
              width="150"
              height="150"
            />
          </div>
          <button className="cursor-pointer" onClick={handleDrawer}>
            {isMenuOpen ? (
              <Icon
                src="/images/icons/close.svg"
                alt="close"
                width="40"
                height="40"
              />
            ) : (
              <Icon
                src="/images/icons/burger.svg"
                alt="drawer"
                width="40"
                height="40"
              />
            )}
          </button>
        </div>
        <div
          className={`${!isMenuOpen ? "hidden" : ""} md:hidden flex flex-col text-center justify-center gap-4 pb-4`}
        >
          <NavBarItems
            closeDrawer={closeDrawer}
            showDialog={showDialog}
            openDialog={openDialog}
            closeDialog={closeDialog}
            handleDialog={handleDialog}
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
