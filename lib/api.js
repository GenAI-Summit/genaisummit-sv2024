import { PTtoUTC } from "./time.js";
import notes from "./notes.js";

const apiUrl = "https://api.gptdao.ai";
// const apiUrl = "http://localhost:8900";

const getOrganizations = async () => {
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
    return [];
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
    return [];
  }
};

const getSpeakers = async () => {
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
    return [];
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
    return [];
  }
};

const getExhibitors = async () => {
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
    return [];
  }
};

const getSessions = async () => {
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
    return [];
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
    return [];
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
    return [];
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
