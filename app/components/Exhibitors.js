import SectionLayout from "../layouts/SectionLayout";
import CompanyCard from "../components/CompanyCard";
import { getExhibitors } from "/lib/api";

const Exhibitors = async () => {
  const exhibitors = await getExhibitiorsData();
  return (
    <SectionLayout title="Exhibitiors" description="MEET OUR EXHIBITIORS">
      <div className="flex flex-wrap mt-2 items-center gap-x-8 gap-y-4">
        {exhibitors.map((exhibitor) => (
          <CompanyCard key={exhibitor.id} company={exhibitor} />
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
