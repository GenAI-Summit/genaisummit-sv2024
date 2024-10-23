"use client";

import React, { useState } from "react";
import Logo from "@/components/Logo";
import Drawer from "@/components/Drawer";
import OrganizationDetail from "@/components/OrganizationDetail";
import { useRouter } from "next/navigation";
import TextHover from "@/motions/TextHover";

const OrganizationCard = ({
  organization,
  bgColor = "bg-theme1Gray3",
  borderColor = "border-theme1Gray3",
  borderColorHover = "hover:border-theme1Gray2",
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const onOrganizationDetail = () => {
    router.push(`/organization/${organization.id}`);
  };

  const openUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div
        className={`w-full
          h-full
          cursor-pointer
          border-2
          ease-in-out
          transition
          duration-300
          rounded-lg
          shadow-md
          ${bgColor}
          ${borderColor}
          ${borderColorHover}
        `}
        onClick={openDrawer}
      >
        <Logo src={organization.logo} alt={organization.name} />
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <div className="max-h-[80%] w-full">
          <OrganizationDetail organization={organization} />
        </div>
        <div className="flex flex-col gap-2">
          {organization.url && (
            <div
              className="cursor-pointer mt-2 font-medium flex justify-start items-center"
              onClick={() => openUrl(organization.url)}
            >
              <TextHover text="Official Website" color="theme1Light1" />
            </div>
          )}
          <div
            className="cursor-pointer mt-2 font-medium flex justify-start items-center"
            onClick={onOrganizationDetail}
          >
            <TextHover text={`About ${organization.name}`} color="theme1Light1" />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default OrganizationCard;
