import SectionLayout from "../Layouts/SectionLayout";
import SubsectionLayout from "../Layouts/SubSectionLayout";
import OrganizationCard from "./OrganizationCard";

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
              <div className="w-full flex flex-wrap items-center justify-start mt-2 gap-x-[7%] lg:gap-x-4 gap-y-4">
                {filteredSponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-[46%] h-36 lg:w-48 lg:h-27"
                  >
                    <OrganizationCard organization={sponsor} />
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
