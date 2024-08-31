import SectionLayout from "@/layouts/SectionLayout";
import OrganizationCard from "@/components/OrganizationCard";

const Exhibitors = ({ exhibitors }) => {
  return (
    <SectionLayout
      title="Exhibitors"
      description="MEET OUR EXHIBITORS | MORE TO BE ANNOUNCED SOON"
    >
      <div className="w-full flex flex-wrap mt-6 items-center gap-x-[4%] md:gap-x-[4%] lg:gap-x-[2%] gap-y-6 md:gap-y-8 lg:gap-y-4">
        {exhibitors.map((exhibitor) => (
          <div
            key={exhibitor.id}
            className="w-[48%] h-36 md:w-[30%] md:h-27 lg:w-[23.5%] lg:h-27"
          >
            <OrganizationCard organization={exhibitor} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Exhibitors;
