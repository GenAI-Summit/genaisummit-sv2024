import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useSpeakers = () => {
  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/speakers`,
    fetcher,
  );

  return {
    speakers: data?.data,
    isLoading,
    isError: error,
  };
};

export default useSpeakers;
