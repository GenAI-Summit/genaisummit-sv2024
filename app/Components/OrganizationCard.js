"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Drawer from "./Drawer";
import OrganizationDetail from "./OrganizationDetail";
import { useRouter } from "next/navigation";

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
        className="w-full h-full bg-color8/[0.1] cursor-pointer border-2 border-color6 ease-in-out transition duration-300 hover:border-color8 rounded-lg shadow-md"
        onClick={openDrawer}
      >
        <Logo src={organization.logo} alt={organization.name} />
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <OrganizationDetail organization={organization} />
        <div className="flex flex-col gap-2">
          {organization.url && (
            <div>
              <span
                className="cursor-pointer mt-2 text-left font-medium ease-in-out duration-300 border-b-2 border-transparent hover:border-color1"
                onClick={() => openUrl(organization.url)}
              >
                Official Website
              </span>
            </div>
          )}
          <div>
            <span
              className="cursor-pointer mt-2 text-left font-medium ease-in-out duration-300 border-b-2 border-transparent hover:border-color1"
              onClick={onOrganizationDetail}
            >
              About {organization.name}
            </span>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default OrganizationCard;
