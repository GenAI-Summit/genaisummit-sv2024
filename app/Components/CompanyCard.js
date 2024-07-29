"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Drawer from "./Drawer";
import CompanyDetail from "./CompanyDetail";
import { useRouter } from "next/navigation";

const CompanyCard = ({ company }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const onCompanyDetail = () => {
    router.push(`/org/${company.id}`);
  };

  return (
    <>
      <div
        className="w-full h-full bg-color7 cursor-pointer border-2 border-color7 ease-in-out duration-300 hover:border-color1 rounded-lg shadow-md"
        onClick={openDrawer}
      >
        <Logo info={company} />
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <CompanyDetail company={company} />
        <div>
          <span
            className="cursor-pointer mt-2 text-left font-medium ease-in-out duration-300 border-b-2 border-transparent hover:border-color1"
            onClick={onCompanyDetail}
          >
            About {company.name}
          </span>
        </div>
      </Drawer>
    </>
  );
};

export default CompanyCard;
