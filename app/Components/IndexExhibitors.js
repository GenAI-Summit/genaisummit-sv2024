import SectionLayout from "../Layouts/SectionLayout";
import OrganizationCard from "./OrganizationCard";
import ShowMore from "./ShowMore";
import RegisterBtn from "./RegisterBtn";

import { getExhibitors } from "/lib/api";

const Exhibitors = async () => {
  const exhibitors = await getExhibitiorsData();
  return (
    <SectionLayout
      title="Exhibitiors"
      description="MEET OUR EXHIBITIORS"
      widget={<RegisterBtn text="Become Our Exhibitor" />}
    >
      <div className="flex flex-wrap justify-around items-center gap-y-4 gap-x-4 md:justify-between">
        {exhibitors.map((exhibitor) => (
          <div key={exhibitor.id} className="w-full h-36 md:w-[23%] md:h-27">
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
