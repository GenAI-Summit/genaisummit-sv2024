import { PTtoUTC } from "./time.js";
import notes from "./notes.js";
import fs from "node:fs";
import path from "node:path";

const apiUrl = "https://api.gptdao.ai";
// const apiUrl = "http://localhost:8900";

const readLocalData = (fileName) => {
  const filePath = path.join(process.cwd(), "public", "data", fileName);
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

const shouldUseLocalData = () =>
  process.env.NEXT_PHASE === "phase-production-build" ||
  process.env.npm_lifecycle_event === "build" ||
  process.env.npm_lifecycle_event === "postbuild";

const normalizeSpeaker = (speaker) => {
  const note = notes.find((item) => item.name === speaker.name);
  return {
    ...speaker,
    avatar: speaker.avatar || speaker.image,
    organization: speaker.organization || speaker.company,
    socials: speaker.socials || {
      linkedin: speaker.linkedin || "",
      twitter: speaker.twitter || "",
    },
    thoth: speaker.thoth || note?.thoth,
    note: speaker.note || note?.note,
    podcast: speaker.podcast || note?.podcast,
  };
};

const normalizeOrganization = (organization) => ({
  ...organization,
  logo: organization.logo || organization.image,
  desc: organization.desc || organization.description || "",
  tier: organization.tier || organization.type || "Exhibitor",
  location: organization.location || "",
  categories: organization.categories || [],
});

const getLocalSpeakers = () => readLocalData("speakers.json").map(normalizeSpeaker);
const getLocalOrganizations = () => readLocalData("exhibitors.json").map(normalizeOrganization);
const getLocalSponsors = () => readLocalData("sponsors.json").map(normalizeOrganization);
const getLocalMedia = () =>
  readLocalData("media.json").map((item) => ({
    id: item.id,
    name: item.name,
    logo: item.logo || item.image || item.avatar,
    url: item.url,
  }));

const getLocalSessions = () => {
  const speakers = getLocalSpeakers();
  return readLocalData("agenda.json")
    .filter((session) => !session.hide)
    .map((session) => ({
      id: session.id,
      name: session.name || session.topic,
      desc: session.desc || session.description || "",
      start: PTtoUTC(session.start),
      end: PTtoUTC(session.end),
      speakers: (session.speakers || [])
        .map((speakerId) => speakers.find((speaker) => speaker.id === speakerId))
        .filter(Boolean),
      moderators: (session.moderators || [])
        .map((speakerId) => speakers.find((speaker) => speaker.id === speakerId))
        .filter(Boolean),
      tag: session.tag || session.type || "Other",
      tracks: session.tracks || [],
      location: session.location || session.room || "TBD",
    }));
};

const getOrganizations = async () => {
  if (shouldUseLocalData()) return getLocalOrganizations();

  try {
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
  } catch (error) {
    console.error("Error fetching organizations:", error);
    return getLocalOrganizations();
  }
};

const getOrganizationById = async (id) => {
  try {
    const exhibitors = await getOrganizations();
    return exhibitors.find((exhibitor) => exhibitor.id === +id);
  } catch (error) {
    console.error("Error fetching organization by id:", error);
    return null;
  }
};

const getSponsors = async () => {
  if (shouldUseLocalData()) return getLocalSponsors();

  try {
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
        exhibitor.tier === "Special" ||
        exhibitor.tier === "Premium Exhibitor",
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
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    return getLocalSponsors();
  }
};

const getSpeakers = async () => {
  if (shouldUseLocalData()) return getLocalSpeakers();

  try {
    const res = await fetch(`${apiUrl}/speakers`);
    if (!res.ok) {
      throw new Error("Failed to fetch speakers data.");
    }
    const data = await res.json();
    const hideSpeakers = await getHideSpeakers();
    const speakers = data.data
      .filter((speaker) => !hideSpeakers.includes(speaker.id))
      .map((speaker) => {
        const note = notes.find((note) => note.name === speaker.name);
        return {
          ...speaker,
          thoth: note?.thoth,
          note: note?.note,
          podcast: note?.podcast,
        };
      });
    return speakers;
  } catch (error) {
    console.error("Error fetching speakers:", error);
    return getLocalSpeakers();
  }
};

const getSpeakerById = async (id) => {
  try {
    const speakers = await getSpeakers();
    return {
      ...speakers.find((speaker) => speaker.id === +id),
      thoth: notes.find((note) => note.name === speakers.name)?.thoth,
      note: notes.find((note) => note.name === speakers.name)?.note,
      podcast: notes.find((note) => note.name === speakers.name)?.podcast,
    };
  } catch (error) {
    console.error("Error fetching speaker by id:", error);
    return null;
  }
};

const getMedia = async () => {
  if (shouldUseLocalData()) return getLocalMedia();

  try {
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
  } catch (error) {
    console.error("Error fetching media:", error);
    return getLocalMedia();
  }
};

const getExhibitors = async () => {
  if (shouldUseLocalData()) return getLocalOrganizations();

  try {
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
  } catch (error) {
    console.error("Error fetching exhibitors:", error);
    return getLocalOrganizations();
  }
};

const getSessions = async () => {
  if (shouldUseLocalData()) return getLocalSessions();

  try {
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
      ).map((speaker) => {
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
          podcast: note?.podcast,
        };
      }),
      tag: session.tags.length > 0 ? session.tags[0] : "Other",
      tracks: session.tracks,
      location: session.location,
    }));
    return sessions;
  } catch (error) {
    console.error("Error fetching sessions:", error);
    return getLocalSessions();
  }
};

const getHomeSessions = async () => {
  try {
    const sessions = await getSessions();
    return sessions.slice(0, 7);
  } catch (error) {
    console.error("Error fetching home sessions:", error);
    return [];
  }
};

const getSessionById = async (id) => {
  try {
    const data = await getSessions();
    const session = data.find((s) => s.id === +id);
    return session;
  } catch (error) {
    console.error("Error fetching session by id:", error);
    return null;
  }
};

const getSessionsBySpeaker = async (name) => {
  try {
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
  } catch (error) {
    console.error("Error fetching sessions by speaker:", error);
    return [];
  }
};

const getNotableAttendees = async () => {
  const fetchAttendees = async (type) => {
    try {
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
    } catch (error) {
      console.error(`Error fetching ${type} attendees:`, error);
      return [];
    }
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
  try {
    const res = await fetch(
      `${apiUrl}/rank/tag?tag_name=hide&type_name=speaker`,
    );
    if (!res.ok) {
      throw new Error("Failed to fetch hide speakers data.");
    }
    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching hide speakers:", error);
    return [];
  }
};

const getMCs = async () => {
  if (shouldUseLocalData()) return getLocalSpeakers().slice(0, 4);

  try {
    const res1 = await fetch(
      `${apiUrl}/rank/tag?tag_name=host&type_name=speaker`,
    );
    if (!res1.ok) {
      throw new Error("Failed to fetch host speakers data.");
    }
    const res2 = await fetch(`${apiUrl}/speakers`);
    if (!res2.ok) {
      throw new Error("Failed to fetch speakers data.");
    }
    const data1 = await res1.json();
    const data2 = await res2.json();
    const mcs = data2.data.filter((speaker) => data1.data.includes(speaker.id));
    return mcs;
  } catch (error) {
    console.error("Error fetching MCs:", error);
    return [];
  }
};


const getHomeSpeakers = async () => {
  if (shouldUseLocalData()) return getLocalSpeakers().slice(0, 8);

  try {
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
  } catch (error) {
    console.error("Error fetching home speakers:", error);
    return getLocalSpeakers().slice(0, 8);
  }
};

const getHideExhibitors = async () => {
  try {
    let res = await fetch(
      `${apiUrl}/rank/tag?tag_name=hide&type_name=exhibitor`,
    );
    if (!res.ok) {
      throw new Error("Failed to fetch hide exhibitors data.");
    }
    let data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching hide exhibitors:", error);
    return [];
  }
};

const getOnlySponsors = async () => {
  try {
    let res = await fetch(`${apiUrl}/rank/tag?tag_name=only_sponsor&type_name=exhibitor`);
    if (!res.ok) {
      throw new Error("Failed to fetch only sponsors data.");
    }
    let data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching only sponsors:", error);
    return [];
  }
};

const getHomeExhibitors = async () => {
  if (shouldUseLocalData()) return getLocalOrganizations().slice(0, 8);

  try {
    let res = await fetch(`${apiUrl}/home/exhibitor`);
    if (!res.ok) {
      throw new Error("Failed to fetch home exhibitors data.");
    }
    let data = await res.json();
    let hideExhibitors = await getHideExhibitors();
    let onlySponsors = await getOnlySponsors();

    const seenNames = new Set();
    let homeExhibitors = data?.data
      .filter((exhibitor) => !hideExhibitors.includes(exhibitor.id))
      .filter((exhibitor) => !onlySponsors.includes(exhibitor.id))
      .filter((exhibitor) => {
        if (seenNames.has(exhibitor.name)) {
          return false;
        }
        seenNames.add(exhibitor.name);
        return true;
      });
    
    return homeExhibitors;
  } catch (error) {
    console.error("Error fetching home exhibitors:", error);
    return getLocalOrganizations().slice(0, 8);
  }
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
  getMCs,
};
