import exhibitorData from "@/public/data/exhibitors.json";
import sponsorData from "@/public/data/sponsors.json";

const sponsorTiers = ["Platinum", "Gold", "Silver", "Special"];

const normalizeOrganization = (organization) => ({
  ...organization,
  logo: organization.logo || organization.image,
  desc: organization.desc || organization.description || "",
  tier: organization.tier || organization.type || "Exhibitor",
  location: organization.location || "",
  categories: organization.categories || [],
});

const useExhibitors = () => {
  const exhibitors = exhibitorData.map(normalizeOrganization);
  const sponsors = sponsorData.map(normalizeOrganization);

  const getExhibitorById = (id) => {
    return exhibitors.find((exhibitor) => exhibitor.id === id);
  };

  return {
    allOrganizations: [...exhibitors, ...sponsors],
    exhibitors,
    getExhibitorById,
    sponsors,
    sponsorTiers,
    isLoading: false,
    isError: false,
  };
};

export default useExhibitors;
