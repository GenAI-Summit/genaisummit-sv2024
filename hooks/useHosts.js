import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const apiUrl = "https://api.gptdao.ai";
// const apiUrl = "http://localhost:8900";

const useHosts = () => {
  const { data: hostIds, isLoading, error } = useSWR(
    `${apiUrl}/rank/tag?tag_name=host&type_name=speaker`,
    fetcher,
  );

  const { data: speakers, isLoading: isLoadingSpeakers, error: errorSpeakers } = useSWR(
    `${apiUrl}/speakers`,
    fetcher,
  );

  console.log(speakers);
  console.log(hostIds);

  const hosts = speakers?.data.filter((speaker) => hostIds?.data.includes(speaker.id));

  return {
    hosts,
    isLoading: isLoading || isLoadingSpeakers,
    isError: error || errorSpeakers,
  };
};

export default useHosts;
