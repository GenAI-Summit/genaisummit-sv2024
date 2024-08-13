import SectionLayout from "../Layouts/SectionLayout";
import OrganizationCard from "./OrganizationCard";
import ShowMore from "./Button/ShowMore";
import RegisterBtn from "./Button/RegisterBtn";

import { getExhibitors } from "/lib/api";

const Exhibitors = async () => {
  const exhibitors = await getExhibitiorsData();
  return (
    <SectionLayout
      title="Exhibitiors"
      description="MEET OUR EXHIBITIORS"
      widget={<RegisterBtn text="Become Our Exhibitor" />}
    >
      <div className="flex flex-wrap justify-start items-center gap-y-4 gap-x-[7%] md:gap-x-[2%] lg:gap-x-[1%]">
        {exhibitors.map((exhibitor) => (
          <div
            key={exhibitor.id}
            className="w-[46%] h-36 md:w-[23%] md:h-27 lg:w-[19%] lg:h-27"
          >
            <OrganizationCard type="exhibitor" organization={exhibitor} />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <ShowMore target="/exhibitors" text="View All Exhibitors" />
      </div>
    </SectionLayout>
  );
};

const getExhibitiorsData = async () => {
  const exhibitors = await getExhibitors();
  return exhibitors.slice(0, 12);
};

export default Exhibitors;
