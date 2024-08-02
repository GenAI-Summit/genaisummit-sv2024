import SectionLayout from "../Layouts/SectionLayout";
import SubsectionLayout from "../Layouts/SubSectionLayout";
import OrgnizationCard from "./OrgnizationCard";
import ShowMore from "./ShowMore";
import { getSponsors } from "/lib/api";

const IndexSponsors = async () => {
  const sponsors = await getSponsorsData();
  const tiers = ["Platinum", "Gold", "Silver", "Special"];
  return (
    <>
      <SectionLayout
        title="Sponsors"
        description="CHECK WHO MAKES THIS EVENT POSSIBLE!"
      >
        {tiers.map((tier) => {
          const filteredSponsors = sponsors.filter(
            (sponsor) => sponsor.tier === tier,
          );
          return (
            <SubsectionLayout key={tier} title={tier} textAlign="text-center">
              <div className="w-full flex flex-wrap items-center justify-center mt-2 gap-x-[3%] gap-y-4">
                {filteredSponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full h-36 md:w-[31%] md:h-27"
                  >
                    <OrgnizationCard type="sponsor" orgnization={sponsor} />
                  </div>
                ))}
              </div>
            </SubsectionLayout>
          );
        })}
        <ShowMore target="/partners" text="View All Sponsors" />
      </SectionLayout>
    </>
  );
};

const getSponsorsData = async () => {
  const sponsors = await getSponsors();
  return sponsors;
};

export default IndexSponsors;
