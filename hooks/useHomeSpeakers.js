import speakerData from "@/public/data/speakers.json";

const useHomeSpeakers = () => {
  const homeSpeakers = speakerData.slice(0, 8).map((speaker) => ({
    ...speaker,
    avatar: speaker.avatar || speaker.image,
    organization: speaker.organization || speaker.company,
    socials: speaker.socials || {
      linkedin: speaker.linkedin || "",
      twitter: speaker.twitter || "",
    },
  }));

  return {
    homeSpeakers,
    isLoading: false,
    isError: false,
  };
};

export default useHomeSpeakers;
