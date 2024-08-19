import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const sponsorTiers = ["Platinum", "Gold", "Silver", "Special"];

const useExhibitors = () => {
  const { data, isLoading, error } = useSWR(
    "https://api.gptdao.ai/exhibitors",
    fetcher,
  );

  const attendees = data?.data.filter(
    (exhibitor) => exhibitor.tier === "Attendee",
  );
  const exhibitors = data?.data.filter(
    (exhibitor) => exhibitor.tier !== "Attendee" && exhibitor.tier !== "Media",
  );
  const media = data?.data.filter((exhibitor) => exhibitor.tier === "Media");
  const sponsors = data?.data.filter((exhibitor) =>
    sponsorTiers.includes(exhibitor.tier),
  );

  return {
    attendees,
    exhibitors,
    media,
    sponsors,
    sponsorTiers,
    isLoading,
    isError: error,
  };
};

export default useExhibitors;
