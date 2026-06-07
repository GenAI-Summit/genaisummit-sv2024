import agendaData from "@/public/data/agenda.json";

const useSessionsIndex = () => {
  const sessions = agendaData.filter((session) => !session.hide);
  const tags = [...new Set(sessions.map((session) => session.type).filter(Boolean))]
    .filter((tag) => tag !== "Breakout");
  const tracks = [...new Set(sessions.flatMap((session) => session.tracks || []).map((track) => track.name || track).filter(Boolean))];
  const locations = [...new Set(sessions.map((session) => session.room || session.location).filter(Boolean))];

  return {
    tags,
    tracks,
    locations,
    isLoading: false,
    isError: false,
  };
};

export default useSessionsIndex;
