import useSWR from "swr";
import useSpeakers from "@/hooks/useSpeakers";
import useExhibitors from "@/hooks/useExhibitors";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const apiUrl = "https://api.gptdao.ai";
// const apiUrl = "http://localhost:8900";

const useMarquee = () => {
  const { allOrganizations, isLoading: isLoadingAllOrganizations, isError: isErrorAllOrganizations } = useExhibitors();
  const { speakers: allSpeakers, isLoading: isLoadingAllSpeakers, isError: isErrorAllSpeakers } = useSpeakers();

  const { data: organizationsData, isLoading: isLoadingOrganizations, error: errorOrganizations } = useSWR(
    `${apiUrl}/rank/tag?tag_name=marquee&type_name=exhibitor`,
    fetcher,
  );

  const { data: speakersData, isLoading: isLoadingSpeakers, error: errorSpeakers } = useSWR(
    `${apiUrl}/rank/tag?tag_name=marquee&type_name=speaker`,
    fetcher,
  );

  const organizations = allOrganizations.filter((organization) => organizationsData?.data.includes(organization.id));
  const speakers = allSpeakers.filter((speaker) => speakersData?.data.includes(speaker.id));

  return {
    organizations,
    speakers,
    isLoading: isLoadingOrganizations || isLoadingSpeakers || isLoadingAllOrganizations || isLoadingAllSpeakers,
    isError: errorOrganizations || errorSpeakers || isErrorAllOrganizations || isErrorAllSpeakers,
  };
};

export default useMarquee;
