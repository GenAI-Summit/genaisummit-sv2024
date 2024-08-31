import useSWR from "swr";
import { PTtoUTC } from "@/lib/time";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useDates = () => {
  const { data, isLoading, error } = useSWR(
    "https://api.gptdao.ai/index/dates",
    fetcher,
  );

  const dates = data?.data.map((date) => {
    const normalizedDate = PTtoUTC(`${date}T00:00:00`);
    return normalizedDate.toLocaleDateString("en-US", {
      timeZone: "America/Los_Angeles",
    });
  }
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
