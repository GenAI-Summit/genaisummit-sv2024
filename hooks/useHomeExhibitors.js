import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const apiUrl = "https://api.gptdao.ai";

const useHomeExhibitors = () => {
  const { data, isLoading, error } = useSWR(
    `${apiUrl}/home/exhibitor`,
    fetcher,
  );

  const {
    data: data2,
    isLoading: isLoading2,
    error: error2,
  } = useSWR(
    `${apiUrl}/rank/tag?tag_name=hide&type_name=exhibitor`,
    fetcher,
  );

  console.log(data);

  const hideExhibitors = data2?.data || [];
  const homeExhibitors =
    data?.data?.filter((exhibitor) => !hideExhibitors.includes(exhibitor.id)) ||
    [];

  return {
    exhibitors: homeExhibitors,
    isLoading: isLoading || isLoading2,
    isError: error || error2,
  };
};

export default useHomeExhibitors;
