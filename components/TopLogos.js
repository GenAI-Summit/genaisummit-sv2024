"use client";

import Image from "next/image";
import useMarquee from "@/hooks/useMarquee";

const TopLogos = () => {
  const { organizations, isLoading, isError } = useMarquee();

  if (isLoading || isError) {
    return null;
  }

  return (
    <div className="max-w-md bg-theme1Light1 rounded-lg px-2 py-1 opacity-90 flex flex-col items-center justify-center">
      <p className="text-center text-theme1Dark1 text-base md:text-lg lg:text-xl">
        Sponsored by
      </p>
      <div className="max-w-maxWidth flex flex-row items-center gap-x-[3%] justify-between">
        {organizations.map((organization) => (
          <div
            key={organization.id}
            className="w-[40%] h-auto"
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
      <p className="text-center text-theme1Dark1 text-base md:text-lg lg:text-xl">
        <span className="font-bold text-red-500">Tesla </span>
        will showcase the latest models and its advanced Autopilot
        technology, including the
        <span className="font-bold text-red-500">
          {" "}
          Model 3, Model Y, Model S, Model X, and Cybertruck
        </span>
        , as well as the newly launched humanoid robot,{" "}
        <span className="font-bold text-red-500">Optimus</span>.
      </p>
    </div>
  );
};

export default TopLogos;