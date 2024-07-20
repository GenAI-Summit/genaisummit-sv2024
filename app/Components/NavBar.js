"use client";

import React, { useState } from "react";
import Icon from "./Icon";
import NavBarItems from "./NavBarItems";
import TicketBtn from "./TicketBtn";
import styles from "../styles/navbar.module.css";
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
      <div
        className={`${styles.navbar} flex flex-row justify-between hidden md:flex`}
      >
        <div className="cursor-pointer" onClick={onClickLogo}>
          <Icon
            className={styles.item}
            src="/images/icons/gptdao.png"
            alt="logo"
            width="40"
            height="40"
          />
        </div>
        <NavBarItems />
        <TicketBtn />
      </div>

      <div className={`${styles.navbar} flex flex-col text-center md:hidden`}>
        <div className="w-full flex flex-row justify-between">
          <div className="cursor-pointer" onClick={onClickLogo}>
            <Icon
              className={styles.item}
              src="/images/icons/gptdao.png"
              alt="GPTDAO Logo"
              width="40"
              height="40"
            />
          </div>
          <button
            className={`${styles.item} ${styles.drawer}`}
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
          className={`${styles.drawerMenu} ${!isMenuOpen ? "hidden" : ""} md:hidden flex flex-col text-center justify-center gap-4 pb-4`}
        >
          <NavBarItems closeDrawer={closeDrawer} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
