import SectionLayout from "@/layouts/SectionLayout";
import SubsectionLayout from "@/layouts/SubSectionLayout";
import OrganizationCard from "@/components/OrganizationCard";
import ShowMore from "@/components/Button/ShowMore";
import RegisterBtn from "@/components/Button/RegisterBtn";
import { getSponsors } from "@/lib/api";

const IndexSponsors = async () => {
  const sponsors = await getSponsorsData();
  const tiers = ["Platinum", "Gold", "Silver", "Special"];
  return (
    <>
      <SectionLayout
        title="Sponsors"
        description="CHECK WHO MAKES THIS EVENT POSSIBLE!"
        widget={<RegisterBtn text="Become Our Sponsor" mode="day" />}
      >
        <div className="w-full mt-6 flex flex-col gap-y-12 md:gap-y-16 justify-center items-center">
          {tiers.map((tier) => {
            const filteredSponsors = sponsors.filter(
              (sponsor) => sponsor.tier === tier,
            );
            if (filteredSponsors.length === 0) {
              return null;
            }
            return (
              <div className="w-full" key={tier}>
                <SubsectionLayout title={tier} textAlign="text-center">
                  <div className="w-full flex flex-wrap items-center justify-center gap-x-[3%] gap-y-4">
                    {filteredSponsors.map((sponsor) => (
                      <div
                        key={sponsor.id}
                        className="w-full h-36 md:w-[31%] md:h-27"
                      >
                        <OrganizationCard
                          type="sponsor"
                          organization={sponsor}
                        />
                      </div>
                    ))}
                  </div>
                </SubsectionLayout>
              </div>
            );
          })}
          <div>
            <ShowMore target="/partners" text="View All Sponsors" mode="day" />
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

const getSponsorsData = async () => {
  const sponsors = await getSponsors();
  return sponsors;
};

export default IndexSponsors;
