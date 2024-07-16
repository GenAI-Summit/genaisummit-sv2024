"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navbar.module.css";

const NavBar = ({ closeDrawer }) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        className={`${styles.item} ${pathname === "/" || pathname === "/home" ? styles.active : ""}`}
        href="/"
        onClick={closeDrawer}
      >
        HOME
      </Link>
      <Link
        className={`${styles.item} ${pathname === "/partners" ? styles.active : ""}`}
        href="/partners"
        onClick={closeDrawer}
      >
        PARTNERS
      </Link>
      <Link
        className={`${styles.item} ${pathname === "/speakers" ? styles.active : ""}`}
        href="/speakers"
        onClick={closeDrawer}
      >
        SPEAKERS
      </Link>
      <Link
        className={`${styles.item} ${pathname === "/exhibitors" ? styles.active : ""}`}
        href="/exhibitors"
        onClick={closeDrawer}
      >
        EXHIBITORS
      </Link>
      <Link
        className={`${styles.item} ${pathname === "/agenda" ? styles.active : ""}`}
        href="/agenda"
        onClick={closeDrawer}
      >
        AGENDA
      </Link>
      <Link
        className={`${styles.item}`}
        href="https://genaisummit.ai/"
        target="_blank"
        onClick={closeDrawer}
      >
        PREVIOUS EVENT
      </Link>
    </>
  );
};

export default NavBar;
