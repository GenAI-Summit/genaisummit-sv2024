import SectionLayout from "../layouts/SectionLayout";
import SubsectionLayout from "../layouts/SubsectionLayout";
import Logo from "../components/Logo";

const Sponsors = async () => {
  const sponsors = await getSponsorsData();
  const types = [
    "Platinum Sponsor",
    "Gold Sponsor",
    "Silver Sponsor",
    "Special Sponsor",
  ];
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
                  <div
                    key={sponsor.id}
                    className="w-full h-36 bg-white md:w-1/4 md:h-28"
                  >
                    <Logo info={sponsor} />
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
  const sponsors = [
    {
      id: 0,
      name: "Amazon",
      type: "Platinum Sponsor",
      logo: "/sponsors/amazon.webp",
      url: "https://www.amazon.com/",
    },
    {
      id: 1,
      name: "IBM",
      type: "Gold Sponsor",
      logo: "/sponsors/ibm.webp",
      url: "https://www.ibm.com/",
    },
    {
      id: 2,
      name: "IOBC",
      type: "Gold Sponsor",
      logo: "/sponsors/iobc.webp",
      url: "https://iobc.com/",
    },
    {
      id: 3,
      name: "SambaNova",
      type: "Silver Sponsor",
      logo: "/sponsors/sambanova.webp",
      url: "https://www.sambanova.ai/",
    },
    {
      id: 4,
      name: "Otter",
      type: "Silver Sponsor",
      logo: "/sponsors/otter.webp",
      url: "https://otter.ai/",
    },
    {
      id: 5,
      name: "Iren",
      type: "Silver Sponsor",
      logo: "/sponsors/iren.webp",
      url: "https://iren.ai/",
    },
    {
      id: 6,
      name: "Hyperbolic Labs",
      type: "Special Sponsor",
      logo: "/sponsors/hyperboliclabs.webp",
      url: "https://hyperboliclabs.com/",
    },
    {
      id: 7,
      name: "TaskUs",
      type: "Special Sponsor",
      logo: "/sponsors/taskus.webp",
      url: "https://www.taskus.com/",
    },
    {
      id: 8,
      name: "MetaSill",
      type: "Special Sponsor",
      logo: "/sponsors/metasill.webp",
      url: "https://www.metasill.com/",
    },
  ];
  return sponsors;
};

export default Sponsors;
