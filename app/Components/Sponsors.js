import SectionLayout from "../Layouts/SectionLayout";
import SubsectionLayout from "../Layouts/SubSectionLayout";
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
            <SubsectionLayout key={type} title={type} textAlign="text-left">
              <div className="w-full flex flex-wrap items-center justify-start mt-2 gap-x-8 gap-y-4">
                {filteredSponsors.map((sponsor) => (
                  <div key={sponsor.id} className="w-full h-36 md:w-48 md:h-27">
                    <CompanyCard company={sponsor} />
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

const getSponsorsData = async () => {
  const sponsors = await getSponsors();
  return sponsors;
};

export default Sponsors;
