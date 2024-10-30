import useSWR from "swr";
import notes from "@/public/data/notes.json";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const apiUrl = "https://api.gptdao.ai";
// const apiUrl = "http://localhost:8900";

const useSpeakers = () => {
  const { data, isLoading, error } = useSWR(
    `${apiUrl}/speakers`,
    fetcher,
  );

  const {
    data: data2,
    isLoading: isLoading2,
    error: error2,
  } = useSWR(
    `${apiUrl}/rank/tag?tag_name=hide&type_name=speaker`,
    fetcher,
  );

  const hideSpeakers = data2?.data || [];
  const speakers =
    data?.data.filter((speaker) => !hideSpeakers.includes(speaker.id)).map((speaker) => {
      const note = notes.find((note) => note.name === speaker.name);
      return {
        ...speaker,
        note: note?.note,
        podcast: note?.podcast,
        thoth: note?.thoth,
      };
    }) || [];

  return {
    speakers,
    isLoading: isLoading || isLoading2,
    isError: error || error2,
  };
};

export default useSpeakers;
