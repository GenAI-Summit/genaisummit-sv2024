"use client";

import React, { useState } from "react";
import Icon from "../Icon";
import Burger from "../SVG/Burger";
import NavBarItems from "./NavBarItems";
import TicketBtn from "../Button/TicketBtn";
import { useRouter } from "next/navigation";
import DropDown from "../../Motions/DropDown";

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
      <div className="fixed top-2 px-6 py-2 lg:w-3/4 max-w-maxWidth shadow-lg rounded-lg bg-colorNavBarBg flex flex-row justify-around items-center hidden lg:flex z-40 text-theme1Dark1 opacity-[98%]">
        <div className="cursor-pointer" onClick={onClickLogo}>
          <Icon
            src="/images/icons/favicon.ico"
            alt="logo"
            width="30"
            height="30"
          />
        </div>
        <NavBarItems
          closeDrawer={closeDrawer}
          showDialog={showDialog}
          openDialog={openDialog}
          closeDialog={closeDialog}
          handleDialog={handleDialog}
        />
        <TicketBtn fill={true} mode="black" url="/tickets" />
      </div>

      <div className="fixed top-2 px-6 py-2 w-[95%] shadow-md rounded-lg bg-colorNavBarBg flex flex-col items-center text-center lg:hidden z-40 text-theme1Dark1 opacity-[98%]">
        <div className="w-full flex flex-row justify-between">
          <div className="cursor-pointer" onClick={onClickLogo}>
            <Icon
              src="/images/icons/favicon.ico"
              alt="GPTDAO Logo"
              width="30"
              height="30"
            />
          </div>
          <TicketBtn width="w-48" fill={true} mode="black" url="/tickets" />
          <button onClick={handleDrawer}>
            <Burger isOpen={isMenuOpen} />
          </button>
        </div>
        <DropDown isOpen={isMenuOpen}>
          <div
            className={`${!isMenuOpen ? "hidden" : ""} lg:hidden flex flex-col text-center justify-center gap-6 py-6`}
          >
            <NavBarItems
              closeDrawer={closeDrawer}
              showDialog={showDialog}
              openDialog={openDialog}
              closeDialog={closeDialog}
              handleDialog={handleDialog}
            />
          </div>
        </DropDown>
      </div>
    </>
  );
};

export default NavBar;
