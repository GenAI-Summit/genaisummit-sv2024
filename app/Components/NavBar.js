"use client";

import React, { useState } from "react";
import Icon from "./Icon";
import NavBarItems from "./NavBarItems";
import TicketBtn from "./TicketBtn";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const openDrawer = () => {
    setIsMenuOpen(true);
  };

  const closeDrawer = () => {
    setIsMenuOpen(false);
  };

  const handleClickDrawer = () => {
    if (!isMenuOpen) {
      openDrawer();
    } else {
      closeDrawer();
    }
  };

  const onClickLogo = () => {
    console.log("Clicked on logo");
    router.push("/");
  };

  return (
    <>
      <div className="fixed top-0 px-4 py-2 w-full bg-navbarBg text-navbarText font-semibold flex flex-row justify-between items-center hidden md:flex z-40">
        <div className="cursor-pointer" onClick={onClickLogo}>
          <Icon
            src="/images/icons/gptdao.png"
            alt="logo"
            width="40"
            height="40"
          />
        </div>
        <NavBarItems />
        <TicketBtn />
      </div>

      <div className="fixed top-0 px-4 py-2 w-full bg-navbarBg text-navbarText font-semibold flex flex-col items-center text-center md:hidden z-40">
        <div className="w-full flex flex-row justify-between">
          <div className="cursor-pointer" onClick={onClickLogo}>
            <Icon
              src="/images/icons/gptdao.png"
              alt="GPTDAO Logo"
              width="40"
              height="40"
            />
          </div>
          <button
            className="cursor-pointer hover:bg-gray-200 hover:rounded-lg duration-300"
            onClick={handleClickDrawer}
          >
            <Icon
              src="/images/icons/drawer.png"
              alt="drawer"
              width="40"
              height="40"
            />
          </button>
        </div>
        <div
          className={`${!isMenuOpen ? "hidden" : ""} md:hidden flex flex-col text-center justify-center gap-4 pb-4`}
        >
          <NavBarItems closeDrawer={closeDrawer} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
