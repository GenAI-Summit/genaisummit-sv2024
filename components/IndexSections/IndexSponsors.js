import SectionLayout from "@/layouts/SectionLayout";
import SubsectionLayout from "@/layouts/SubSectionLayout";
import OrganizationCard from "@/components/OrganizationCard";
// import ShowMore from "@/components/Button/ShowMore";
import RegisterBtn from "@/components/Button/RegisterBtn";
import { getSponsors } from "@/lib/api";
import stylesMap from "@/lib/stylesMap";

const IndexSponsors = async () => {
  const sponsors = await getSponsors();
  const tiers = ["Platinum", "Gold", "Silver", "Special", "Premium Exhibitor"];

  return (
    <>
      <SectionLayout
        title="Sponsors"
        description="CHECK WHO MAKES THIS EVENT POSSIBLE!"
        widget={<RegisterBtn text="Become Our Sponsor" mode="day" />}
      >
        <div className="w-full flex flex-col gap-y-6 mt-6">
          {tiers.map((tier) => {
            const filteredSponsors = sponsors.filter(
              (sponsor) => sponsor.tier === tier,
            );
            if (filteredSponsors.length === 0) {
              return null;
            }
            return (
              <div key={tier} className="w-full">
                <SubsectionLayout
                  title={tier}
                  textAlign="text-left"
                  titleColor={stylesMap[tier.replace(" ", "")].title}
                >
                  <div className="flex flex-wrap gap-x-[4%] md:gap-x-[3%] gap-y-4 md:gap-y-6 lg:gap-y-8 justify-start items-center">
                    {filteredSponsors.map((sponsor) => (
                      <div
                        key={sponsor.id}
                        className="w-[48%] md:w-[31%] h-36 md:h-27"
                      >
                        <OrganizationCard
                          organization={sponsor}
                          bgColor={stylesMap[tier.replace(" ", "")].bg}
                          borderColor={stylesMap[tier.replace(" ", "")].border}
                          borderColorHover={stylesMap[tier.replace(" ", "")].hover}
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

export default IndexSponsors;
