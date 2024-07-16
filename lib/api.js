const baseUrl = "http://localhost:3001";

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
  data.sort((a, b) => new Date(a.start) - new Date(b.start));
  return data;
};

const getSessionsBySpeakerId = async (id) => {
  const res = await fetch(`${baseUrl}/data/agenda.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch agenda data.");
  }
  const data = await res.json();
  return data
    .filter(
      (session) =>
        session.speakers.some((speaker) => speaker.id === +id) ||
        session.moderators.some((speaker) => speaker.id === +id),
    )
    .sort((a, b) => new Date(a.start) - new Date(b.start));
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
