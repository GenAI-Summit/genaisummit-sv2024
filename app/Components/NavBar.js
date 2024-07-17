"use client";

import React, { useState } from "react";
import Icon from "./Icon";
import NavBarItems from "./NavBarItems";
import styles from "../styles/navbar.module.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <>
      <div
        className={`${styles.navbar} flex flex-row justify-between hidden md:flex`}
      >
        <Icon
          className={styles.item}
          src="/icons/gptdao.png"
          alt="logo"
          width="40"
          height="40"
        />
        <NavBarItems />
      </div>

      <div className={`${styles.navbar} flex flex-col text-center md:hidden`}>
        <div className="w-full flex flex-row justify-between">
          <Icon
            className={styles.item}
            src="/icons/gptdao.png"
            alt="GPTDAO Logo"
            width="40"
            height="40"
          />
          <button
            className={`${styles.item} ${styles.drawer}`}
            onClick={handleClickDrawer}
          >
            <Icon src="/icons/drawer.png" alt="drawer" width="40" height="40" />
          </button>
        </div>
        <div
          className={`${styles.drawerMenu} ${!isMenuOpen ? "hidden" : ""} md:hidden flex flex-col text-center justify-center`}
        >
          <NavBarItems closeDrawer={closeDrawer} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
