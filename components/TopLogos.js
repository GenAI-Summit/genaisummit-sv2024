"use client";

import Image from "next/image";
import useMarquee from "@/hooks/useMarquee";

const TopLogos = () => {
  const { organizations, isLoading, isError } = useMarquee();

  if (isLoading || isError) {
    return null;
  }

  return (
    <div className="max-w-maxWidth bg-theme1Light1 rounded-lg px-2 py-1 opacity-90">
      <p className="text-center font-monaspace_neon text-theme1Dark1 text-base md:text-lg lg:text-xl">
        Sponsors and Featured Exhibitor
      </p>
      <div className="max-w-maxWidth flex flex-row items-center gap-x-[3%] justify-center">
        {organizations.map((organization) => (
          <div
            key={organization.id}
            className="w-[30%] h-auto"
          >
            <Image
              src={organization.logo}
              alt={organization.name}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopLogos;