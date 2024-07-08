import SectionLayout from "../layouts/SectionLayout";
import SubsectionLayout from "../layouts/SubsectionLayout";
import CompanyCard from "./CompanyCard";
import { getSponsors } from "/lib/api";

const Sponsors = async () => {
  const sponsors = await getSponsorsData();
  const types = ["Platinum", "Gold", "Silver", "Special"];
  return (
    <>
      <SectionLayout
        title="Sponsors"
        description="CHECK WHO MAKES THIS EVENT POSSIBLE!"
      >
        {types.map((type) => {
          const filteredSponsors = sponsors.filter(
            (sponsor) => sponsor.type === type,
          );
          return (
            <SubsectionLayout key={type} title={type}>
              <div className="flex flex-wrap items-center mt-2 gap-x-8 gap-y-4">
                {filteredSponsors.map((sponsor) => (
                  <CompanyCard key={sponsor.id} company={sponsor} />
                ))}
              </div>
            </SubsectionLayout>
          );
        })}
      </SectionLayout>
    </>
  );
};

const getSponsorsData = async () => {
  const sponsors = await getSponsors();
  return sponsors;
};

export default Sponsors;
