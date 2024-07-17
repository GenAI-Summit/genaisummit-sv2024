// const baseUrl = "http://localhost:3001";
const baseUrl = "https://preview.gptdao.ai";

const getSponsors = async () => {
  const res = await fetch(`${baseUrl}/data/sponsors.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch sponsors data.");
  }
  const data = await res.json();
  return data;
};

const getSponsorById = async (id) => {
  const res = await fetch(`${baseUrl}/data/sponsors.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch sponsors data.");
  }
  const data = await res.json();
  return data.find((sponsor) => sponsor.id === +id);
};

const getSpeakers = async () => {
  const res = await fetch(`${baseUrl}/data/speakers.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch speakers data.");
  }
  const data = await res.json();
  return data;
};

const getSpeakerById = async (id) => {
  const res = await fetch(`${baseUrl}/data/speakers.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch speakers data.");
  }
  const data = await res.json();
  return data.find((speaker) => speaker.id === +id);
};

const getMedia = async () => {
  const res = await fetch(`${baseUrl}/data/media.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch media data.");
  }
  const data = await res.json();
  return data;
};

const getExhibitors = async () => {
  const res = await fetch(`${baseUrl}/data/exhibitors.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch exhibitors data.");
  }
  const data = await res.json();
  return data;
};

const getExhibitorById = async (id) => {
  const res = await fetch(`${baseUrl}/data/exhibitors.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch exhibitors data.");
  }
  const data = await res.json();
  return data.find((exhibitor) => exhibitor.id === +id);
};

const getWorkshops = async () => {
  const res = await fetch(`${baseUrl}/data/workshops.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch agenda data.");
  }
  const data = await res.json();
  return data;
};

const getSeminars = async () => {
  const res = await fetch(`${baseUrl}/data/seminars.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch agenda data.");
  }
  const data = await res.json();
  return data;
};

const getAgenda = async () => {
  const res = await fetch(`${baseUrl}/data/agenda.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch agenda data.");
  }
  const data = await res.json();
  await Promise.all(
    data.map(async (session) => {
      // Convert date strings to Date objects
      session.start = new Date(session.start);
      session.end = new Date(session.end);
      session.date = session.start.toLocaleDateString();

      // Get speaker details
      session.speakers = await Promise.all(
        session.speakers.map(async (speakerId) => {
          return await getSpeakerById(speakerId);
        }),
      );

      session.moderators = await Promise.all(
        session.moderators.map(async (speakerId) => {
          return await getSpeakerById(speakerId);
        }),
      );
    }),
  );
  data.sort((a, b) => a.start - b.start);
  return data;
};

const getSessionsBySpeakerId = async (id) => {
  const res = await fetch(`${baseUrl}/data/agenda.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch agenda data.");
  }
  const data = await res.json();
  const sessions = data.filter(
    (session) =>
      session.speakers.includes(+id) || session.moderators.includes(+id),
  );
  await Promise.all(
    sessions.map(async (session) => {
      // Convert date strings to Date objects
      session.start = new Date(session.start);
      session.end = new Date(session.end);
      session.date = session.start.toLocaleDateString();

      // Get speaker details
      session.speakers = await Promise.all(
        session.speakers.map(async (speakerId) => {
          return await getSpeakerById(speakerId);
        }),
      );

      session.moderators = await Promise.all(
        session.moderators.map(async (speakerId) => {
          return await getSpeakerById(speakerId);
        }),
      );
    }),
  );
  return sessions.sort((a, b) => new Date(a.start) - new Date(b.start));
};

export {
  getSponsors,
  getSponsorById,
  getSpeakers,
  getSpeakerById,
  getMedia,
  getExhibitors,
  getExhibitorById,
  getWorkshops,
  getSeminars,
  getAgenda,
  getSessionsBySpeakerId,
};
