import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useSessionsIndex = () => {
  const { data, isLoading, error } = useSWR(
    "https://api.gptdao.ai/index/agenda",
    fetcher,
  );

  const tags = data?.data.tags.map((tag) => tag.name);
  const tracks = data?.data.tracks.map((track) => track.name);
  const locations = data?.data.locations.map((location) => location.name);

  return {
    tags,
    tracks,
    locations,
    isLoading,
    isError: error,
  };
};

export default useSessionsIndex;
