import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const sponsorTiers = ["Platinum", "Gold", "Silver", "Special"];

const useExhibitors = () => {
  const { data, isLoading, error } = useSWR(
    "https://api.gptdao.ai/exhibitors",
    fetcher,
  );

  const {
    data: data2,
    isLoading: isLoading2,
    error: error2,
  } = useSWR(
    "https://api.gptdao.ai/rank/tag?tag_name=hide&type_name=exhibitor",
    fetcher,
  );

  const hideExhibitors = data2?.data || [];
  const exhibitors =
    data?.data.filter((exhibitor) => !hideExhibitors.includes(exhibitor.id)) ||
    [];

  const sponsors = exhibitors?.filter((exhibitor) =>
    sponsorTiers.includes(exhibitor.tier),
  );

  const getExhibitorById = (id) => {
    return exhibitors.find((exhibitor) => exhibitor.id === id);
  };

  return {
    exhibitors,
    getExhibitorById,
    sponsors,
    sponsorTiers,
    isLoading: isLoading || isLoading2,
    isError: error || error2,
  };
};

export default useExhibitors;
