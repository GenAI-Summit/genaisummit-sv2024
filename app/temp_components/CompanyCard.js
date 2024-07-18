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
        className="w-full h-36 bg-white cursor-pointer md:w-48 md:h-27"
        onClick={openDrawer}
      >
        <Logo info={company} />
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <CompanyDetail company={company} />
        <div>
          <span
            className="cursor-pointer mt-2 text-left font-medium ease-in-out duration-300 border-b-2 border-transparent hover:border-sky-500"
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
