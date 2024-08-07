import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useExhibitorsIndex = () => {
  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/index/exhibitors`,
    fetcher,
  );

  const categories = data?.data["booth-categories"].map(
    (category) => category.name,
  );

  return {
    categories,
    isLoading,
    isError: error,
  };
};

export default useExhibitorsIndex;
