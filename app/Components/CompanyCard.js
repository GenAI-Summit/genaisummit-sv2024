"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Drawer from "./Drawer";
import CompanyDetail from "./CompanyDetail";
import { useRouter } from "next/navigation";

const CompanyCard = ({ type, company }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const onCompanyDetail = () => {
    router.push(`/${type}/${company.id}`);
  };

  return (
    <>
      <div
        className="w-full h-full bg-cardBgPrimary cursor-pointer border-2 border-cardBorder ease-in-out duration-300 hover:border-cardBorderHover rounded-lg shadow-md"
        onClick={openDrawer}
      >
        <Logo info={company} />
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <CompanyDetail company={company} />
        <div>
          <span
            className="cursor-pointer mt-2 text-left font-medium ease-in-out duration-300 border-b-2 border-transparent hover:border-cardBorderHover"
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
