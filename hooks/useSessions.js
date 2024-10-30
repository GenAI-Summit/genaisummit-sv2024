import useSWR from "swr";
import { PTtoUTC } from "@/lib/time";
import notes from "@/public/data/notes.json";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useSessions = () => {
  const { data, isLoading, error } = useSWR(
    "https://api.gptdao.ai/agenda",
    fetcher,
  );

  const sessions = data?.data.map((session) => ({
    id: session.id,
    name: session.name,
    desc: session.desc,
    start: PTtoUTC(session.start),
    end: PTtoUTC(session.end),
    speakers: session.speakers.filter(
      (speaker) => speaker.session_role === "speaker",
    )
      .map((speaker) => {
        const note = notes.find((note) => note.name === speaker.name);
        return {
          ...speaker,
          thoth: note?.thoth,
          note: note?.note,
          podcast: note?.podcast,
        };
      }),
    moderators: session.speakers.filter(
      (speaker) => speaker.session_role === "moderator",
    ).map((speaker) => {
      const note = notes.find((note) => note.name === speaker.name);
      return {
        ...speaker,
        thoth: note?.thoth,
        note: note?.note,
      };
    }),
    tag: session.tags.length > 0 ? session.tags[0] : "Other",
    tracks: session.tracks,
    location: session.location,
  }));

  return {
    sessions,
    isLoading,
    isError: error,
  };
};

export default useSessions;
