import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useDates = () => {
  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/index/dates`,
    fetcher,
  );

  console.log(data);

  const dates = data?.data.map((date) =>
    new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
      timeZone: "UTC",
    }),
  );
  console.log(dates);

  return {
    dates,
    isLoading,
    isError: error,
  };
};

export default useDates;
