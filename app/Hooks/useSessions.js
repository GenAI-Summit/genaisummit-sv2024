import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useSessions = () => {
  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/agenda`,
    fetcher,
  );

  return {
    sessions: data?.data.map((session) => ({
      id: session.id,
      name: session.name,
      desc: session.desc,
      start: new Date(session.start),
      end: new Date(session.end),
      speakers: session.speakers.filter(
        (speaker) => speaker.session_role === "speaker",
      ),
      moderators: session.speakers.filter(
        (speaker) => speaker.session_role === "moderator",
      ),
      tag: session.tags.length > 0 ? session.tags[0] : "Other",
      tracks: session.tracks,
      location: session.location,
    })),
    isLoading,
    isError: error,
  };
};

export default useSessions;
