"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = ({ closeDrawer }) => {
  const pathname = usePathname();
  const hoverEffect = "hover:text-black transition duration-300 ease-in-out";

  return (
    <>
      <Link
        className={`${pathname === "/" || pathname === "/home" ? "text-black" : ""} ${hoverEffect}`}
        href="/"
        onClick={closeDrawer}
      >
        HOME
      </Link>
      <Link
        className={`${pathname === "/partners" ? "text-black" : ""} ${hoverEffect}`}
        href="/partners"
        onClick={closeDrawer}
      >
        PARTNERS
      </Link>
      <Link
        className={`${pathname === "/speakers" ? "text-black" : ""} ${hoverEffect}`}
        href="/speakers"
        onClick={closeDrawer}
      >
        SPEAKERS
      </Link>
      <Link
        className={`${pathname === "/exhibitors" ? "text-black" : ""} ${hoverEffect}`}
        href="/exhibitors"
        onClick={closeDrawer}
      >
        EXHIBITORS
      </Link>
      <Link
        className={`${pathname === "/agenda" ? "text-black" : ""} ${hoverEffect}`}
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
