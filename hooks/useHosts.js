import speakerData from "@/public/data/speakers.json";

const useHosts = () => {
  const hosts = speakerData.slice(0, 4).map((speaker) => ({
    ...speaker,
    avatar: speaker.avatar || speaker.image,
    organization: speaker.organization || speaker.company,
    socials: speaker.socials || {
      linkedin: speaker.linkedin || "",
      twitter: speaker.twitter || "",
    },
  }));

  return {
    hosts,
    isLoading: false,
    isError: false,
  };
};

export default useHosts;
