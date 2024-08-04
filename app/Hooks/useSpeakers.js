import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useSpeakers = () => {
  const { data, isLoading, error } = useSWR(
    "https://api.gptdao.ai/speakers",
    fetcher,
  );

  return {
    speakers: data?.data,
    isLoading,
    isError: error,
  };
};

export default useSpeakers;
