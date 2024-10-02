import { PTtoUTC } from "./time";
import notes from "@/public/data/notes.json";

const apiUrl = "https://api.gptdao.ai";
// const apiUrl = "http://localhost:8900";

const getOrganizations = async () => {
  const res = await fetch(`${apiUrl}/exhibitors`);
  if (!res.ok) {
    throw new Error("Failed to fetch exhibitors data.");
  }
  const data = await res.json();
  const organizations = data.data.map((exhibitor) => {
    return {
      id: exhibitor.id,
      name: exhibitor.name,
      url: exhibitor.url,
      logo: exhibitor.logo,
      desc: exhibitor.desc,
      tier: exhibitor.tier,
      location: exhibitor.location,
      categories: exhibitor.categories,
    };
  });
  return organizations;
};

const getOrganizationById = async (id) => {
  const exhibitors = await getOrganizations();
  return exhibitors.find((exhibitor) => exhibitor.id === +id);
};

const getSponsors = async () => {
  const res = await fetch(`${apiUrl}/exhibitors`);
  if (!res.ok) {
    throw new Error("Failed to fetch exhibitors data.");
  }
  const data = await res.json();
  const sponsors = data.data
    .filter(
      (exhibitor) =>
        exhibitor.tier === "Platinum" ||
        exhibitor.tier === "Gold" ||
        exhibitor.tier === "Silver" ||
        exhibitor.tier === "Special",
    )
    .map((exhibitor) => {
      return {
        id: exhibitor.id,
        name: exhibitor.name,
        url: exhibitor.url,
        logo: exhibitor.logo,
        desc: exhibitor.desc,
        tier: exhibitor.tier,
        location: exhibitor.location,
        categories: exhibitor.categories,
      };
    });
  return sponsors;
};

const getSpeakers = async () => {
  const res = await fetch(`${apiUrl}/speakers`);
  if (!res.ok) {
    throw new Error("Failed to fetch speakers data.");
  }
  const data = await res.json();
  const hideSpeakers = await getHideSpeakers();
  const speakers = data.data.filter((speaker) => !hideSpeakers.includes(speaker.id));
  return speakers;
};

const getSpeakerById = async (id) => {
  const speakers = await getSpeakers();
  return speakers.find((speaker) => speaker.id === +id);
};

const getMedia = async () => {
  const res = await fetch(
    `${apiUrl}/additional/list?partnership_type=media`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch exhibitors data.");
  }
  const data = await res.json();
  const media = data.data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      url: item.url,
      logo: item.avatar,
    };
  });
  return media;
};

const getExhibitors = async () => {
  const res = await fetch(`${apiUrl}/exhibitors`);
  if (!res.ok) {
    throw new Error("Failed to fetch exhibitors data.");
  }
  const data = await res.json();
  const exhibitors = data.data.map((exhibitor) => {
    return {
      id: exhibitor.id,
      name: exhibitor.name,
      url: exhibitor.url,
      logo: exhibitor.logo,
      desc: exhibitor.desc,
      tier: exhibitor.tier,
      location: exhibitor.location,
      categories: exhibitor.categories,
    };
  });
  return exhibitors;
};

const getSessions = async () => {
  const res = await fetch(`${apiUrl}/agenda`);
  if (!res.ok) {
    throw new Error("Failed to fetch agenda data.");
  }
  const data = await res.json();
  const sessions = data.data.map((session) => ({
    id: session.id,
    name: session.name,
    desc: session.desc,
    start: PTtoUTC(session.start),
    end: PTtoUTC(session.end),
    speakers: session.speakers.filter(
      (speaker) => speaker.session_role === "speaker",
    ),
    moderators: session.speakers.filter(
      (speaker) => speaker.session_role === "moderator",
    ),
    tag: session.tags.length > 0 ? session.tags[0] : "Other",
    tracks: session.tracks,
    location: session.location,
  }));
  return sessions;
};

const getHomeSessions = async () => {
  const sessions = await getSessions();
  return sessions.slice(0, 7);
};

const getSessionById = async (id) => {
  const data = await getSessions();
  const session = data.find((s) => s.id === +id);
  return session;
};

const getSessionsBySpeaker = async (name) => {
  const data = await getSessions();
  const sessions = data.filter(
    (session) =>
      session.speakers.map((speaker) => speaker.name).includes(name) ||
      session.moderators.map((speaker) => speaker.name).includes(name),
  );
  sessions.map((session) => ({
    ...session,
    start: PTtoUTC(session.start),
    end: PTtoUTC(session.end),
    date: session.start.toLocaleDateString(),
  }));
  return sessions.sort((a, b) => PTtoUTC(a.start) - PTtoUTC(b.start));
};

const getNotableAttendees = async () => {
  const fetchAttendees = async (type) => {
    const res = await fetch(
      `${apiUrl}/additional/list?partnership_type=${type}`,
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch ${type} attendees data.`);
    }
    const data = await res.json();
    return data.data.map((attendee) => ({
      id: attendee.id,
      name: attendee.name,
      logo: attendee.avatar,
      url: attendee.url,
      type: type,
    }));
  };

  try {
    const [Attendees1, Attendees2] = await Promise.all([
      fetchAttendees("notable_attendees_1"),
      fetchAttendees("notable_attendees_2"),
    ]);

    return [Attendees1, Attendees2];
  } catch (error) {
    console.error("Error fetching attendees:", error);
    throw error;
  }
};

const getHideSpeakers = async () => {
  let res = await fetch(
    `${apiUrl}/rank/tag?tag_name=hide&type_name=speaker`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch hide speakers data.");
  }
  let data = await res.json();
  return data?.data || [];
};

const getHomeSpeakers = async () => {
  let res = await fetch(`${apiUrl}/home/speaker`);
  if (!res.ok) {
    throw new Error("Failed to fetch home speakers data.");
  }
  let data = await res.json();
  let hideSpeakers = await getHideSpeakers();
  let homeSpeakers = data?.data.filter(
    (speaker) => !hideSpeakers.includes(speaker.id),
  );
  homeSpeakers.forEach((speaker) => {
    let note = notes.find((note) => note.id === speaker.id);
    speaker.note = note?.note;
  });
  return homeSpeakers;
};

const getHideExhibitors = async () => {
  let res = await fetch(
    `${apiUrl}/rank/tag?tag_name=hide&type_name=exhibitor`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch hide exhibitors data.");
  }
  let data = await res.json();
  return data?.data || [];
};

const getHomeExhibitors = async () => {
  let res = await fetch(`${apiUrl}/home/exhibitor`);
  if (!res.ok) {
    throw new Error("Failed to fetch home exhibitors data.");
  }
  let data = await res.json();
  let hideExhibitors = await getHideExhibitors();
  let homeExhibitors = data?.data.filter(
    (exhibitor) => !hideExhibitors.includes(exhibitor.id),
  );
  return homeExhibitors;
};

export {
  getOrganizations,
  getOrganizationById,
  getSponsors,
  getSpeakers,
  getSpeakerById,
  getMedia,
  getExhibitors,
  getSessions,
  getHomeSessions,
  getSessionById,
  getSessionsBySpeaker,
  getNotableAttendees,
  getHomeSpeakers,
  getHomeExhibitors,
};
