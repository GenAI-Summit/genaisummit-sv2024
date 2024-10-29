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

  const {
    data: data3,
    isLoading: isLoading3,
    error: error3,
  } = useSWR(
    "https://api.gptdao.ai/rank/tag?tag_name=only_sponsor&type_name=exhibitor",
    fetcher,
  );

  const hideExhibitors = data2?.data || [];
  const onlySponsors = data3?.data || [];

  const seenNames = new Set();
  const exhibitors =
    data?.data
      .filter((exhibitor) => !hideExhibitors.includes(exhibitor.id))
      .filter((exhibitor) => !onlySponsors.includes(exhibitor.id))
      .filter((exhibitor) => {
        if (seenNames.has(exhibitor.name)) {
          return false;
        }
        seenNames.add(exhibitor.name);
        return true;
      }) || [];

  const seenNames2 = new Set();
  const sponsors =
    data?.data
      .filter((exhibitor) => !hideExhibitors.includes(exhibitor.id))
      .filter((exhibitor) => sponsorTiers.includes(exhibitor.tier))
      .filter((exhibitor) => {
        if (seenNames2.has(exhibitor.name)) {
          return false;
        }
        seenNames2.add(exhibitor.name);
        return true;
      }) || [];

  const getExhibitorById = (id) => {
    return exhibitors.find((exhibitor) => exhibitor.id === id);
  };

  return {
    allOrganizations: data?.data || [],
    exhibitors,
    getExhibitorById,
    sponsors,
    sponsorTiers,
    isLoading: isLoading || isLoading2 || isLoading3,
    isError: error || error2 || error3,
  };
};

export default useExhibitors;
