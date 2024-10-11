import SectionLayout from "@/layouts/SectionLayout";
import SubsectionLayout from "@/layouts/SubSectionLayout";
import OrganizationCard from "@/components/OrganizationCard";
import stylesMap from "@/lib/stylesMap";

const Sponsors = ({ sponsorTiers, sponsors }) => {
  return (
    <>
      <SectionLayout
        title="Sponsors"
        description="CHECK WHO MAKES THIS EVENT POSSIBLE!"
      >
        <div className="w-full flex flex-col gap-y-12 md:gap-y-4 justify-start items-center">
          {sponsorTiers.map((tier) => {
            const filteredSponsors = sponsors.filter(
              (sponsor) => sponsor.tier === tier,
            );
            if (filteredSponsors.length === 0) {
              return null;
            }
            return (
              <div className="w-full" key={tier}>
                <SubsectionLayout
                  title={tier}
                  textAlign="text-left"
                  titleColor={stylesMap[tier].title}
                >
                  <div className="w-full flex flex-wrap items-center justify-start gap-x-[4%] md:gap-x-[3%] lg:gap-x-[3%] gap-y-4 md:gap-y-6">
                    {filteredSponsors.map((sponsor) => (
                      <div
                        key={sponsor.id}
                        className="w-[48%] h-36 md:w-[48%] md:h-27 lg:w-[31%] lg:h-27"
                      >
                        <OrganizationCard
                          organization={sponsor}
                          bgColor={stylesMap[tier].bg}
                          borderColor={stylesMap[tier].border}
                          borderColorHover={stylesMap[tier].hover}
                        />
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
