"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Drawer from "./Drawer";
import OrganizationDetail from "./OrganizationDetail";
import { useRouter } from "next/navigation";
import TextHover from "../Motions/TextHover";

const OrganizationCard = ({ organization }) => {
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
        className="w-full h-full bg-theme1Gray3 cursor-pointer border-2 border-theme1Gray3 ease-in-out transition duration-300 hover:border-theme1Gray2 rounded-lg shadow-md"
        onClick={openDrawer}
      >
        <Logo src={organization.logo} alt={organization.name} />
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <OrganizationDetail organization={organization} />
        <div className="flex flex-col gap-2">
          {organization.url && (
            <p
              className="cursor-pointer mt-2 text-left font-medium"
              onClick={() => openUrl(organization.url)}
            >
              <TextHover color="theme1Light1">Official Website</TextHover>
            </p>
          )}
          <p
            className="cursor-pointer mt-2 text-left font-medium"
            onClick={onOrganizationDetail}
          >
            <TextHover color="theme1Light1">
              About {organization.name}
            </TextHover>
          </p>
        </div>
      </Drawer>
    </>
  );
};

export default OrganizationCard;
