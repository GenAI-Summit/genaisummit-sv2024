import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useDates = () => {
  const { data, isLoading, error } = useSWR(
    "https://api.gptdao.ai/index/dates",
    fetcher,
  );

  const dates = data?.data.map((date) =>
    new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
      timeZone: "UTC",
    }),
  );

  const daysMap = dates
    ? Object.fromEntries(
      dates?.map((date, index) => [date, `DAY ${index + 1}`]),
    )
    : {};

  return {
    dates,
    daysMap,
    isLoading,
    isError: error,
  };
};

export default useDates;
