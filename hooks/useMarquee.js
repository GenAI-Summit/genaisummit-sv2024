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

  const { data: hideOrganizationsData, isLoading: isLoadingHideOrganizations, error: errorHideOrganizations } = useSWR(
    `${apiUrl}/rank/tag?tag_name=hide&type_name=exhibitor`,
    fetcher,
  );

  const { data: speakersData, isLoading: isLoadingSpeakers, error: errorSpeakers } = useSWR(
    `${apiUrl}/rank/tag?tag_name=marquee&type_name=speaker`,
    fetcher,
  );

  const { data: hideSpeakersData, isLoading: isLoadingHideSpeakers, error: errorHideSpeakers } = useSWR(
    `${apiUrl}/rank/tag?tag_name=hide&type_name=speaker`,
    fetcher,
  );

  const marqueeOrganizations = organizationsData?.data.filter((id) => !hideOrganizationsData?.data.includes(id));

  const marqueeSpeakers = speakersData?.data.filter((id) => !hideSpeakersData?.data.includes(id));

  const organizations = allOrganizations?.filter((organization) => marqueeOrganizations?.includes(organization.id));
  const speakers = allSpeakers?.filter((speaker) => marqueeSpeakers?.includes(speaker.id));

  console.log(allOrganizations);
  console.log(marqueeOrganizations);
  console.log(organizations);

  return {
    organizations,
    speakers,
    isLoading: isLoadingOrganizations || isLoadingSpeakers || isLoadingAllOrganizations || isLoadingAllSpeakers || isLoadingHideOrganizations || isLoadingHideSpeakers,
    isError: errorOrganizations || errorSpeakers || isErrorAllOrganizations || isErrorAllSpeakers || errorHideOrganizations || errorHideSpeakers,
  };
};

export default useMarquee;
