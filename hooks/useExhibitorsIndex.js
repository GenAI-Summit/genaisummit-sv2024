import exhibitorData from "@/public/data/exhibitors.json";

const useExhibitorsIndex = () => {
  const categories = [...new Set(exhibitorData.flatMap((exhibitor) => exhibitor.categories || []))];

  return {
    categories,
    isLoading: false,
    isError: false,
  };
};

export default useExhibitorsIndex;
