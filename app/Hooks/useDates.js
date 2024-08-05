import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useDates = () => {
  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/index/dates`,
    fetcher,
  );

  const dates = data?.data.map((date) => new Date(date).toLocaleDateString());

  return {
    dates,
    isLoading,
    isError: error,
  };
};

export default useDates;
