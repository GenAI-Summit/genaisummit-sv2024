"use client";

import React, { useState } from "react";
import Icon from "@/components/Icon";
import Burger from "@/components/SVG/Burger";
import NavBarItems from "@/components/NavBar/NavBarItems";
import TicketBtn from "@/components/Button/TicketBtn";
import { useRouter } from "next/navigation";
import DropDown from "@/motions/DropDown";

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
    router.push("/");
    closeDrawer();
  };

  const onClickTicket = () => {
    closeDrawer();
    console.log("Clicked on ticket");
  };

  return (
    <>
      <div className="fixed top-1 px-6 py-2 lg:w-3/4 max-w-maxWidth shadow-lg rounded-lg bg-theme1Light3 flex flex-row justify-around items-center hidden lg:flex z-40 text-theme1Dark1 opacity-[98%]">
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
        <TicketBtn
          fill={true}
          mode="black"
          url="/tickets"
          evt="PC NavBar Ticket Button"
        />
      </div>

      <div className="fixed top-1 px-6 py-2 w-[95%] shadow-md rounded-lg bg-theme1Light3 flex flex-col items-center text-center lg:hidden z-40 text-theme1Dark1 opacity-[98%]">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="cursor-pointer" onClick={onClickLogo}>
            <Icon
              src="/images/icons/favicon.ico"
              alt="GPTDAO Logo"
              width="30"
              height="30"
            />
          </div>
          <div onClick={onClickTicket}>
            <TicketBtn
              width="w-48"
              fill={true}
              mode="black"
              url="/tickets"
              evt="Mobile NavBar Ticket Button"
            />
          </div>
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
