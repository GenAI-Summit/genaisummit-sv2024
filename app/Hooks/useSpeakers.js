import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useSpeakers = () => {
  const { data, isLoading, error } = useSWR(
    "https://api.gptdao.ai/speakers",
    fetcher,
  );

  const speakers = [];
  const indexSpeakers = [];

  data?.data.forEach((speaker) => {
    let name = speaker.name;
    const isIndexed = name.startsWith("_INDEX_");

    if (isIndexed) {
      name = name.slice(7);
    }

    const processedSpeaker = {
      id: speaker.id,
      name: name,
      bio: speaker.bio,
      title: speaker.title,
      organization: speaker.organization,
      avatar: speaker.avatar,
    };

    speakers.push(processedSpeaker);

    if (isIndexed) {
      indexSpeakers.push(processedSpeaker);
    }
  });

  return {
    speakers,
    indexSpeakers,
    isLoading,
    isError: error,
  };
};

export default useSpeakers;
