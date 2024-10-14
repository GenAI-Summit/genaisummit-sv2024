import { Suspense } from "react";
import Loader from "@/components/Loader";
import SectionLayout from "@/layouts/SectionLayout";
import OrganizationCard from "@/components/OrganizationCard";
// import ShowMore from "@/components/Button/ShowMore";
import RegisterExhibitor from "@/components/Button/RegisterExhibitor";
import { getHomeExhibitors } from "@/lib/api";

const IndexExhibitors = async () => {
  let homeExhibitors = await getHomeExhibitors();

  return (
    <SectionLayout
      title="Exhibitors"
      description="MEET OUR EXHIBITORS"
      widget={<RegisterExhibitor />}
    >
      <div className="mt-8 md:mt-10 flex flex-wrap justify-start items-center gap-y-7 md:gap-y-8 lg:gap-y-4 gap-x-[4%] md:gap-x-[4%] lg:gap-x-[1%]">
        {homeExhibitors.map((exhibitor) => (
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
      {/*
      <div className="mt-6 md:mt-8">
        <Suspense fallback={<Loader />}>
          <ShowMore
            target="/exhibitors"
            text="Show All"
            mode="day"
          />
        </Suspense>
      </div>
      */}
    </SectionLayout>
  );
};

export default IndexExhibitors;
