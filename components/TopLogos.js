"use client";

import Image from "next/image";
import useMarquee from "@/hooks/useMarquee";

const TopLogos = () => {
  const { organizations, isLoading, isError } = useMarquee();

  if (isLoading || isError) {
    return null;
  }

  return (
    <div className="w-96 bg-theme1Light1 rounded-lg px-2 py-1 opacity-90">
      <p className="text-center text-theme1Dark1 text-base md:text-lg lg:text-xl">
        Sponsored by
      </p>
      <div className="max-w-maxWidth flex flex-row items-center gap-x-[3%] justify-center">
        {organizations.map((organization) => (
          <div
            key={organization.id}
            className="w-[48%] h-auto"
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