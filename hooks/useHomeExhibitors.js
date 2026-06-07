import exhibitorData from "@/public/data/exhibitors.json";

const useHomeExhibitors = () => {
  const homeExhibitors = exhibitorData.slice(0, 8).map((exhibitor) => ({
    ...exhibitor,
    logo: exhibitor.logo || exhibitor.image,
    desc: exhibitor.desc || exhibitor.description || "",
    tier: exhibitor.tier || "Exhibitor",
    categories: exhibitor.categories || [],
  }));

  return {
    exhibitors: homeExhibitors,
    isLoading: false,
    isError: false,
  };
};

export default useHomeExhibitors;
