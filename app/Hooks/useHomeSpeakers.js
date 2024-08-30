import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useHomeSpeakers = () => {
  const { data, isLoading, error } = useSWR(
    "https://api.gptdao.ai/home/speaker",
    fetcher,
  );

  const {
    data: data2,
    isLoading: isLoading2,
    error: error2,
  } = useSWR(
    "https://api.gptdao.ai/rank/tag?tag_name=hide&type_name=speaker",
    fetcher,
  );

  const hideSpeakers = data2?.data || [];
  const homeSpeakers =
    data?.data.filter((speaker) => !hideSpeakers.includes(speaker.id)) || [];

  return {
    homeSpeakers,
    isLoading: isLoading || isLoading2,
    isError: error || error2,
  };
};

export default useHomeSpeakers;
