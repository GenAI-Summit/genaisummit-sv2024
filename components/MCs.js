"use client";

import Loader from "@/components/Loader";
import Error from "@/components/Error";
import Image from "next/image";
import SectionLayout from "@/layouts/SectionLayout";
import useHosts from "@/hooks/useHosts";

const MCs = () => {
  const { hosts: mcs, isLoading, isError } = useHosts();

  if (!mcs || mcs.length === 0) {
    return null;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <SectionLayout title="MCs">
        <div className="w-full flex flex-wrap mt-12 gap-x-[2%] md:gap-x-[2%] lg:gap-x-[1.7%] gap-y-2 justify-start">
          {mcs.map((mc) => (
            <div
              key={mc.id}
              className="w-[23%] md:w-[15%] lg:w-[11%] flex flex-col"
            >
              <Image
                src={mc.avatar}
                alt={mc.name}
                width={500}
                height={500}
                loading="lazy"
              />
              <div className="mt-2 flex flex-col items-start justify-between text-theme1Light1">
                <p className="text-[9px] md:text-[12px] lg:text-[12px] xl:text-[13px] font-bold">
                  {mc.name}
                </p>
                <p className="text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px]">
                  {mc.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default MCs;
