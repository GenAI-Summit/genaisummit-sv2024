const baseUrl = "http://localhost:3001";

const getSponsors = async () => {
  const res = await fetch(`${baseUrl}/data/sponsors.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch sponsors data.");
  }
  const data = await res.json();
  return data;
};

const getSpeakers = async () => {
  const res = await fetch(`${baseUrl}/data/speakers.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch speakers data.");
  }
  const data = await res.json();
  return data;
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
  return data;
};

export {
  getSponsors,
  getSpeakers,
  getMedia,
  getExhibitors,
  getWorkshops,
  getSeminars,
  getAgenda,
};
