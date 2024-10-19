// import SectionLayout from "@/layouts/SectionLayout";
import SubsectionLayout from "@/layouts/SubSectionLayout";
import OrganizationCard from "@/components/OrganizationCard";
// import ShowMore from "@/components/Button/ShowMore";
// import RegisterBtn from "@/components/Button/RegisterBtn";
import { getSponsors } from "@/lib/api";
import stylesMap from "@/lib/stylesMap";

const IndexSponsors = async () => {
  const sponsors = await getSponsors();
  const tiers = ["Platinum", "Premium Exhibitor", "Gold", "Silver", "Special"];
  const sponsorTiers = ["Platinum", "Gold", "Silver", "Special"];

  stylesMap["Premium Exhibitor"] = {
    bg: "bg-premiumExhibitorBg",
    border: "border-premiumExhibitorBorder",
    hover: "hover:border-premiumExhibitorBorderHover",
    title: "text-premiumExhibitorTitle",
  };

  return (
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
              title={sponsorTiers.includes(tier) ? tier + " Sponsors" : tier}
              textAlign="text-left"
              titleColor={stylesMap[tier].title}
            >
              <div className="flex flex-wrap gap-x-[4%] md:gap-x-[3%] gap-y-4 md:gap-y-6 lg:gap-y-8 justify-start items-center">
                {filteredSponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-[48%] md:w-[31%] h-36 md:h-27"
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
  );
};

export default IndexSponsors;
