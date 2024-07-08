"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Drawer from "./Drawer";
import CompanyDetail from "./CompanyDetail";

const CompanyCard = ({ company }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div
        className="w-full h-36 bg-white cursor-pointer md:w-48 md:h-27"
        onClick={openDrawer}
      >
        <Logo info={company} />
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <CompanyDetail company={company} />
      </Drawer>
    </>
  );
};

export default CompanyCard;
