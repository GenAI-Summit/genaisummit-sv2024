"use client";

import { Suspense } from "react";
import Loader from "../Loader";
import SectionLayout from "../../Layouts/SectionLayout";
import OrganizationCard from "../OrganizationCard";
import ShowMore from "../Button/ShowMore";
import RegisterBtn from "../Button/RegisterBtn";
import Error from "../Error";
import useExhibitors from "../../Hooks/useExhibitors";

// import { getExhibitors } from "/lib/api";

const Exhibitors = () => {
  const { exhibitors, isLoading, isError } = useExhibitors();
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }
  // const exhibitors = await getExhibitiorsData();
  return (
    <SectionLayout
      title="Exhibitors"
      description="MEET OUR EXHIBITORS"
      widget={<RegisterBtn text="Become Our Exhibitor" mode="day" />}
    >
      <div className="mt-8 md:mt-10 flex flex-wrap justify-start items-center gap-y-7 md:gap-y-8 lg:gap-y-4 gap-x-[4%] md:gap-x-[4%] lg:gap-x-[1%]">
        {exhibitors.map((exhibitor) => (
          <div
            key={exhibitor.id}
            className="w-[48%] h-36 md:w-[30%] md:h-27 lg:w-[19%] lg:h-27"
          >
            <Suspense fallback={<Loader />}>
              <OrganizationCard type="exhibitor" organization={exhibitor} />
            </Suspense>
          </div>
        ))}
      </div>
      <div className="mt-6 md:mt-8">
        <Suspense fallback={<Loader />}>
          <ShowMore
            target="/exhibitors"
            text="View All Exhibitors"
            mode="day"
          />
        </Suspense>
      </div>
    </SectionLayout>
  );
};

/*
const getExhibitiorsData = async () => {
  const exhibitors = await getExhibitors();
  return exhibitors.slice(0, 12);
};
*/

export default Exhibitors;
