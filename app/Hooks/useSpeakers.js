import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useSpeakers = () => {
  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/speakers`,
    fetcher,
  );

  const speakers = data?.data
    .sort((a, b) => {
      const rankA = parseInt(a.name.match(/_RANK_(\d+)_/)[1]);
      const rankB = parseInt(b.name.match(/_RANK_(\d+)_/)[1]);
      return rankA - rankB;
    })
    .map((speaker) => ({
      ...speaker,
      name: speaker.name.replace(/_RANK_\d+_/, ""),
    }));

  return {
    speakers,
    isLoading,
    isError: error,
  };
};

export default useSpeakers;
