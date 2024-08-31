import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useExhibitors = () => {
  const { data, isLoading, error } = useSWR(
    "https://api.gptdao.ai/additional/list?partnership_type=media",
    fetcher,
  );

  const media = data?.data.map((item) => ({
    id: item.id,
    name: item.name,
    logo: item.avatar,
    url: item.url,
  }));

  return {
    media,
    isLoading,
    isError: error,
  };
};

export default useExhibitors;
