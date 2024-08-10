import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const sponsorTiers = ["Platinum", "Gold", "Silver", "Special"];

const useExhibitors = () => {
  const { data, isLoading, error } = useSWR(
    "https://api.gptdao.ai/exhibitors",
    fetcher,
  );

  return {
    exhibitors: data?.data.filter((exhibitor) => exhibitor.tier !== "Media"),
    media: data?.data.filter((exhibitor) => exhibitor.tier === "Media"),
    sponsors: data?.data.filter((exhibitor) =>
      sponsorTiers.includes(exhibitor.tier),
    ),
    sponsorTiers,
    isLoading,
    isError: error,
  };
};

export default useExhibitors;
