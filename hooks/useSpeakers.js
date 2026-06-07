import notes from "@/public/data/notes.json";
import speakerData from "@/public/data/speakers.json";

const useSpeakers = () => {
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
        note: note?.note,
        podcast: note?.podcast,
        thoth: note?.thoth,
      };
    });

  return {
    speakers,
    isLoading: false,
    isError: false,
  };
};

export default useSpeakers;
