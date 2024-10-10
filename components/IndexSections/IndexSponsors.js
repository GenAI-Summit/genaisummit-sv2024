import SectionLayout from "@/layouts/SectionLayout";
import SubsectionLayout from "@/layouts/SubSectionLayout";
import OrganizationCard from "@/components/OrganizationCard";
// import ShowMore from "@/components/Button/ShowMore";
import RegisterBtn from "@/components/Button/RegisterBtn";
import { getSponsors } from "@/lib/api";

const IndexSponsors = async () => {
  const sponsors = await getSponsors();
  const tiers = ["Platinum", "Gold", "Silver", "Special"];
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
                <SubsectionLayout title={tier} textAlign="text-center">
                  <div className="w-full flex flex-col flex-wrap md:flex-row md:gap-x-[2%] gap-y-4 justify-center items-center">
                    {filteredSponsors.map((sponsor) => (
                      <div
                        key={sponsor.id}
                        className="w-full md:w-[31%] h-36"
                      >
                        <OrganizationCard
                          organization={sponsor}
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
