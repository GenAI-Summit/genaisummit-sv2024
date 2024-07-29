import SectionLayout from "../Layouts/SectionLayout";
import CompanyCard from "../Components/CompanyCard";
import { getExhibitors } from "/lib/api";

const Exhibitors = async () => {
  const exhibitors = await getExhibitiorsData();
  return (
    <SectionLayout title="Exhibitiors" description="MEET OUR EXHIBITIORS">
      <div className="flex flex-wrap mt-2 items-center gap-x-8 gap-y-4">
        {exhibitors.map((exhibitor) => (
          <div key={exhibitor.id} className="w-full h-36 md:w-48 md:h-27">
            <CompanyCard company={exhibitor} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

const getExhibitiorsData = async () => {
  const exhibitors = await getExhibitors();
  return exhibitors;
};

export default Exhibitors;
