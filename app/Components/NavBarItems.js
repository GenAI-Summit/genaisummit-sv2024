"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = ({ closeDrawer }) => {
  const pathname = usePathname();
  const hoverEffect = "hover:text-color1 transition duration-300 ease-in-out";
  const activeEffect = "text-color1";

  return (
    <>
      <Link
        className={`${pathname === "/" || pathname === "/home" ? activeEffect : ""} ${hoverEffect}`}
        href="/"
        onClick={closeDrawer}
      >
        HOME
      </Link>
      <Link
        className={`${pathname === "/partners" ? activeEffect : ""} ${hoverEffect}`}
        href="/partners"
        onClick={closeDrawer}
      >
        PARTNERS
      </Link>
      <Link
        className={`${pathname === "/speakers" ? activeEffect : ""} ${hoverEffect}`}
        href="/speakers"
        onClick={closeDrawer}
      >
        SPEAKERS
      </Link>
      <Link
        className={`${pathname === "/exhibitors" ? activeEffect : ""} ${hoverEffect}`}
        href="/exhibitors"
        onClick={closeDrawer}
      >
        EXHIBITORS
      </Link>
      <Link
        className={`${pathname === "/agenda" ? activeEffect : ""} ${hoverEffect}`}
        href="/agenda"
        onClick={closeDrawer}
      >
        AGENDA
      </Link>
      <Link
        className={hoverEffect}
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
