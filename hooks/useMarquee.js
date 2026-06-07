import useSpeakers from "@/hooks/useSpeakers";
import useExhibitors from "@/hooks/useExhibitors";

const useMarquee = () => {
  const { allOrganizations, isLoading: isLoadingAllOrganizations, isError: isErrorAllOrganizations } = useExhibitors();
  const { speakers: allSpeakers, isLoading: isLoadingAllSpeakers, isError: isErrorAllSpeakers } = useSpeakers();

  const organizations = allOrganizations?.slice(0, 12);
  const speakers = allSpeakers?.slice(0, 12);

  return {
    organizations,
    speakers,
    isLoading: isLoadingAllOrganizations || isLoadingAllSpeakers,
    isError: isErrorAllOrganizations || isErrorAllSpeakers,
  };
};

export default useMarquee;
