"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Drawer from "./Drawer";
import OrgnizationDetail from "./OrgnizationDetail";
import { useRouter } from "next/navigation";

const OrgnizationCard = ({ orgnization }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const onOrgnizationDetail = () => {
    router.push(`/orgnization/${orgnization.id}`);
  };

  return (
    <>
      <div
        className="w-full h-full bg-color7 cursor-pointer border-2 border-color7 ease-in-out duration-300 hover:border-color1 rounded-lg shadow-md"
        onClick={openDrawer}
      >
        <Logo src={orgnization.logo} alt={orgnization.name} />
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <OrgnizationDetail orgnization={orgnization} />
        <div>
          <span
            className="cursor-pointer mt-2 text-left font-medium ease-in-out duration-300 border-b-2 border-transparent hover:border-color1"
            onClick={onOrgnizationDetail}
          >
            About {orgnization.name}
          </span>
        </div>
      </Drawer>
    </>
  );
};

export default OrgnizationCard;
