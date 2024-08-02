import SectionLayout from "../Layouts/SectionLayout";
import OrgnizationCard from "../Components/OrgnizationCard";

const Exhibitors = ({ exhibitors }) => {
  return (
    <SectionLayout title="Exhibitiors" description="MEET OUR EXHIBITIORS">
      <div className="w-full flex flex-wrap mt-2 items-center gap-x-8 gap-y-4">
        {exhibitors.map((exhibitor) => (
          <div key={exhibitor.id} className="w-full h-36 md:w-48 md:h-27">
            <OrgnizationCard orgnization={exhibitor} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Exhibitors;
