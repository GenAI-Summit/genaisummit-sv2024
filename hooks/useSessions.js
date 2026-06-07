import { PTtoUTC } from "@/lib/time";
import notes from "@/public/data/notes.json";
import agendaData from "@/public/data/agenda.json";
import speakerData from "@/public/data/speakers.json";

const speakers = speakerData.map((speaker) => {
  const note = notes.find((note) => note.name === speaker.name);
  return {
    ...speaker,
    avatar: speaker.avatar || speaker.image,
    organization: speaker.organization || speaker.company,
    socials: speaker.socials || {
      linkedin: speaker.linkedin || "",
      twitter: speaker.twitter || "",
    },
    thoth: note?.thoth,
    note: note?.note,
    podcast: note?.podcast,
  };
});

const speakerById = (speakerId) => speakers.find((speaker) => speaker.id === speakerId);

const useSessions = () => {
  const sessions = agendaData.filter((session) => !session.hide).map((session) => ({
    id: session.id,
    name: session.name || session.topic,
    desc: session.desc || session.description || "",
    start: PTtoUTC(session.start),
    end: PTtoUTC(session.end),
    speakers: (session.speakers || []).map(speakerById).filter(Boolean),
    moderators: (session.moderators || []).map(speakerById).filter(Boolean),
    tag: session.tag || session.type || "Other",
    tracks: session.tracks || [],
    location: session.location || session.room || "TBD",
  }));

  return {
    sessions,
    isLoading: false,
    isError: false,
  };
};

export default useSessions;
