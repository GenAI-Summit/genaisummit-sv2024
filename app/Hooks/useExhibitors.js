import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const sponsorTiers = ["Platinum", "Gold", "Silver", "Special"];

const useExhibitors = () => {
  const { data, isLoading, error } = useSWR(
    "https://api.gptdao.ai/exhibitors",
    fetcher,
  );

  const exhibitors = data?.data;

  const sponsors = exhibitors?.filter((exhibitor) =>
    sponsorTiers.includes(exhibitor.tier),
  );

  return {
    exhibitors,
    sponsors,
    sponsorTiers,
    isLoading,
    isError: error,
  };
};

export default useExhibitors;
