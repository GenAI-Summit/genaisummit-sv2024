import SectionLayout from "../Layouts/SectionLayout";
import CompanyCard from "../Components/CompanyCard";
import ShowMore from "../Components/ShowMore";

import { getExhibitors } from "/lib/api";

const Exhibitors = async () => {
  const exhibitors = await getExhibitiorsData();
  return (
    <SectionLayout title="Exhibitiors" description="MEET OUR EXHIBITIORS">
      <div className="flex flex-wrap justify-around items-center gap-y-4 gap-x-4 md:justify-between">
        {exhibitors.map((exhibitor) => (
          <div key={exhibitor.id} className="w-full h-36 md:w-1/5 md:h-27">
            <CompanyCard type="exhibitor" company={exhibitor} />
          </div>
        ))}
      </div>
      <ShowMore target="/exhibitors" text="View All Exhibitors" />
    </SectionLayout>
  );
};

const getExhibitiorsData = async () => {
  const exhibitors = await getExhibitors();
  return exhibitors.slice(0, 12);
};

export default Exhibitors;
