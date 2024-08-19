import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const sponsorTiers = ["Platinum", "Gold", "Silver", "Special"];

const useExhibitors = () => {
  const { data, isLoading, error } = useSWR(
    "https://api.gptdao.ai/exhibitors",
    fetcher,
  );

  const attendees = data?.data
    .filter((exhibitor) => exhibitor.tier === "Attendee")
    .sort(sorter);
  const exhibitors = data?.data
    .filter(
      (exhibitor) =>
        exhibitor.tier !== "Attendee" && exhibitor.tier !== "Media",
    )
    .sort(sorter);
  const media = data?.data.filter((exhibitor) => exhibitor.tier === "Media");
  const sponsors = data?.data.filter((exhibitor) =>
    sponsorTiers.includes(exhibitor.tier),
  );

  console.log(exhibitors);

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

const sorter = (a, b) => {
  const rankRegex = /^_RANK_(\d+)_/;
  const aMatch = a.name.match(rankRegex);
  const bMatch = b.name.match(rankRegex);
  if (aMatch && bMatch) {
    return parseInt(aMatch[1]) - parseInt(bMatch[1]);
  } else if (aMatch) {
    return -1;
  } else if (bMatch) {
    return 1;
  } else {
    return 0;
  }
};

export default useExhibitors;
