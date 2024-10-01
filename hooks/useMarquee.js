import useSWR from "swr";
import useSpeakers from "@/hooks/useSpeakers";
import useExhibitors from "@/hooks/useExhibitors";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const apiUrl = "https://api.gptdao.ai";
// const apiUrl = "http://localhost:8900";

const useMarquee = () => {
  const { exhibitors: allExhibitors, isLoading: isLoadingAllExhibitors, isError: isErrorAllExhibitors } = useExhibitors();
  const { speakers: allSpeakers, isLoading: isLoadingAllSpeakers, isError: isErrorAllSpeakers } = useSpeakers();

  const { data: exhibitorsData, isLoading: isLoadingExhibitors, error: errorExhibitors } = useSWR(
    `${apiUrl}/rank/tag?tag_name=marquee&type_name=exhibitor`,
    fetcher,
  );

  const { data: speakersData, isLoading: isLoadingSpeakers, error: errorSpeakers } = useSWR(
    `${apiUrl}/rank/tag?tag_name=marquee&type_name=speaker`,
    fetcher,
  );

  const exhibitors = allExhibitors.filter((exhibitor) => exhibitorsData?.data.includes(exhibitor.id));
  const speakers = allSpeakers.filter((speaker) => speakersData?.data.includes(speaker.id));

  console.log(speakers);

  return {
    exhibitors,
    speakers,
    isLoading: isLoadingExhibitors || isLoadingSpeakers || isLoadingAllExhibitors || isLoadingAllSpeakers,
    isError: errorExhibitors || errorSpeakers || isErrorAllExhibitors || isErrorAllSpeakers,
  };
};

export default useMarquee;
