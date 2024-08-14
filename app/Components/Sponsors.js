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
        <div className="w-full mt-6 flex flex-col gap-y-12 md:gap-y-16 justify-start items-center">
          {sponsorTiers.map((tier) => {
            const filteredSponsors = sponsors.filter(
              (sponsor) => sponsor.tier === tier,
            );
            if (filteredSponsors.length === 0) {
              return null;
            }
            return (
              <div className="w-full" key={tier}>
                <SubsectionLayout title={tier} textAlign="text-left">
                  <div className="w-full flex flex-wrap items-center justify-start gap-x-[4%] md:gap-x-[2%] lg:gap-x-[1%] gap-y-7 md:gap-y-6">
                    {filteredSponsors.map((sponsor) => (
                      <div
                        key={sponsor.id}
                        className="w-[48%] h-36 md:w-[30%] md:h-27 lg:w-[23%] lg:h-27"
                      >
                        <OrganizationCard organization={sponsor} />
                      </div>
                    ))}
                  </div>
                </SubsectionLayout>
              </div>
            );
          })}
        </div>
      </SectionLayout>
    </>
  );
};

export default Sponsors;
