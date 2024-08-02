import SectionLayout from "../Layouts/SectionLayout";
import SubsectionLayout from "../Layouts/SubSectionLayout";
import OrgnizationCard from "./OrgnizationCard";

const Sponsors = ({ sponsorTiers, sponsors }) => {
  return (
    <>
      <SectionLayout
        title="Sponsors"
        description="CHECK WHO MAKES THIS EVENT POSSIBLE!"
      >
        {sponsorTiers.map((tier) => {
          const filteredSponsors = sponsors.filter(
            (sponsor) => sponsor.tier === tier,
          );
          if (filteredSponsors.length === 0) {
            return null;
          }
          return (
            <SubsectionLayout key={tier} title={tier} textAlign="text-left">
              <div className="w-full flex flex-wrap items-center justify-start mt-2 gap-x-8 gap-y-4">
                {filteredSponsors.map((sponsor) => (
                  <div key={sponsor.id} className="w-full h-36 md:w-48 md:h-27">
                    <OrgnizationCard orgnization={sponsor} />
                  </div>
                ))}
              </div>
            </SubsectionLayout>
          );
        })}
      </SectionLayout>
    </>
  );
};

export default Sponsors;
