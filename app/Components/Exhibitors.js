import SectionLayout from "../Layouts/SectionLayout";
import OrganizationCard from "../Components/OrganizationCard";

const Exhibitors = ({ exhibitors }) => {
  return (
    <SectionLayout title="Exhibitiors" description="MEET OUR EXHIBITIORS">
      <div className="w-full flex flex-wrap mt-2 items-center gap-x-[7%] lg:gap-x-4 gap-y-4">
        {exhibitors.map((exhibitor) => (
          <div key={exhibitor.id} className="w-[46%] h-36 lg:w-48 lg:h-27">
            <OrganizationCard organization={exhibitor} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Exhibitors;
