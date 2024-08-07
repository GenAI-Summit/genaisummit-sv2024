const apiUrl = "https://api.gptdao.ai";

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

const getOrganizationById = async (id) => {
  const exhibitors = await getExhibitors();
  return exhibitors.find((exhibitor) => exhibitor.id === +id);
};

const getSpeakers = async () => {
  const res = await fetch(`${apiUrl}/speakers`);
  if (!res.ok) {
    throw new Error("Failed to fetch speakers data.");
  }
  const data = await res.json();
  const speakers = data?.data
    .sort((a, b) => {
      const rankA = parseInt(a.name.match(/_RANK_(\d+)_/)[1]);
      const rankB = parseInt(b.name.match(/_RANK_(\d+)_/)[1]);
      return rankA - rankB;
    })
    .map((speaker) => {
      return {
        id: speaker.id,
        name: speaker.name.replace(/_RANK_(\d+)_/, ""),
        title: speaker.title,
        organization: speaker.organization,
        bio: speaker.bio,
        avatar: speaker.avatar,
        session_role: speaker.session_role,
      };
    });
  return speakers;
};

const getSpeakerById = async (id) => {
  const speakers = await getSpeakers();
  return speakers.find((speaker) => speaker.id === +id);
};

const getMedia = async () => {
  const res = await fetch(`${apiUrl}/exhibitors`);
  if (!res.ok) {
    throw new Error("Failed to fetch exhibitors data.");
  }
  const data = await res.json();
  const media = data.data
    .filter((exhibitor) => exhibitor.tier === "Media")
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
  return media;
};

const getExhibitors = async () => {
  const res = await fetch(`${apiUrl}/exhibitors`);
  if (!res.ok) {
    throw new Error("Failed to fetch exhibitors data.");
  }
  const data = await res.json();
  const exhibitors = data.data
    .filter((exhibitor) => exhibitor.tier !== "Media")
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
    start: new Date(session.start),
    end: new Date(session.end),
    speakers: session.speakers
      .filter((speaker) => speaker.session_role === "speaker")
      .map((speaker) => ({
        ...speaker,
        name: speaker.name.replace(/_RANK_(\d+)_/, ""),
      })),
    moderators: session.speakers
      .filter((speaker) => speaker.session_role === "moderator")
      .map((speaker) => ({
        ...speaker,
        name: speaker.name.replace(/_RANK_(\d+)_/, ""),
      })),
    tag: session.tags.length > 0 ? session.tags[0] : "Other",
    tracks: session.tracks,
    location: session.location,
  }));
  return sessions;
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
    start: new Date(session.start),
    end: new Date(session.end),
    date: session.start.toLocaleDateString(),
  }));
  // await Promise.all(
  //   sessions.map(async (session) => {
  //     // Convert date strings to Date objects
  //     session.start = new Date(session.start);
  //     session.end = new Date(session.end);
  //     session.date = session.start.toLocaleDateString();

  //     // Get speaker details
  //     // session.speakers = await Promise.all(
  //     //   session.speakers.map(async (speakerId) => {
  //     //     return await getSpeakerById(speakerId);
  //     //   }),
  //     // );
  //     // session.speakers = await Promise.all(
  //     //   session.speakers.map(async (name) => {
  //     //     return await getSpeaker(name);
  //     //   }),
  //     // );

  //     // session.moderators = await Promise.all(
  //     //   session.moderators.map(async (speakerId) => {
  //     //     return await getSpeakerById(speakerId);
  //     //   }),
  //     // );
  //   }),
  // );
  // console.log(sessions);
  return sessions.sort((a, b) => new Date(a.start) - new Date(b.start));
};

/*// 
  // const getSessionsBySpeakerId = async (id) => {
  // const res = await fetch(`${baseUrl}/data/agenda.json`);
  // if (!res.ok) {
  //   throw new Error("Failed to fetch agenda data.");
  // }
  // const data = await res.json();
  // const sessions = data.filter(
  //   (session) =>
  //     session.speakers.includes(+id) || session.moderators.includes(+id),
  // );
  // await Promise.all(
  //   sessions.map(async (session) => {
  //     // Convert date strings to Date objects
  //     session.start = new Date(session.start);
  //     session.end = new Date(session.end);
  //     session.date = session.start.toLocaleDateString();

  //     // Get speaker details
  //     session.speakers = await Promise.all(
  //       session.speakers.map(async (speakerId) => {
  //         return await getSpeakerById(speakerId);
  //       }),
  //     );

  //     session.moderators = await Promise.all(
  //       session.moderators.map(async (speakerId) => {
  //         return await getSpeakerById(speakerId);
  //       }),
  //     );
  //   }),
  // );
  return sessions.sort((a, b) => new Date(a.start) - new Date(b.start));
};
*/

export {
  getSponsors,
  getSpeakers,
  getSpeakerById,
  getMedia,
  getExhibitors,
  getOrganizationById,
  getSessions,
  getSessionById,
  getSessionsBySpeaker,
  // getSessionsBySpeakerId,
};
