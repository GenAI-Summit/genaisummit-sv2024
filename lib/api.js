// const baseUrl = "http://localhost:3001";
const baseUrl =
  "https://raw.githubusercontent.com/WHOAIVA/genaisummit_santaclara/main/public";
const apiUrl = "https://api.gptdao.ai";
const event_id = "genai_202405";

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
  // const res = await fetch(`${baseUrl}/data/speakers.json`);
  const res = await fetch(`${apiUrl}/speakers?event_id=${event_id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch speakers data.");
  }
  const data = await res.json();
  const speakers = data.data.speakers.map((speaker) => {
    return {
      id: speaker.pid,
      name: speaker.name,
      title: speaker.title,
      company: speaker.company,
      bio: speaker.bio,
      image: speaker.pic,
    };
  });
  return speakers;
};

const getSpeaker = async (name) => {
  const speakers = await getSpeakers();
  return speakers.find((speaker) => speaker.name === name);
};

const getSpeakerById = async (id) => {
  const speakers = await getSpeakers();
  return speakers.find((speaker) => speaker.id === +id);
  // const res = await fetch(`${baseUrl}/data/speakers.json`);
  // if (!res.ok) {
  //   throw new Error("Failed to fetch speakers data.");
  // }
  // const data = await res.json();
  // return data.find((speaker) => speaker.id === +id);
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
  // const res = await fetch(`${baseUrl}/data/agenda.json`);
  // if (!res.ok) {
  //   throw new Error("Failed to fetch agenda data.");
  // }
  // const data = await res.json();

  const data = [];
  const dates = ["2024-10-29", "2024-10-30"];

  for (const date of dates) {
    try {
      const res = await fetch(
        `${apiUrl}/agenda?event_id=${event_id}&date=${date}`,
      );

      if (!res.ok) {
        throw new Error("Failed to fetch agenda data.");
      }

      const agenda = await res.json();
      const sessions = agenda.data.results.map((session) => ({
        id: session.id,
        topic: session.name,
        description: session.desc,
        start: session.start,
        end: session.end,
        speakers: session.speakers,
        moderators: [],
        type: "Keynote",
        room: session.place,
      }));

      data.push(...sessions);
    } catch (error) {
      console.error(`Error fetching agenda for date ${date}:`, error);
    }
  }

  await Promise.all(
    data.map(async (session) => {
      // Convert date strings to Date objects
      session.start = new Date(session.start);
      session.end = new Date(session.end);
      session.date = session.start.toLocaleDateString();

      // Get speaker details
      // session.speakers = await Promise.all(
      //   session.speakers.map(async (speakerId) => {
      //     return await getSpeakerById(speakerId);
      //   }),
      // );
      session.speakers = await Promise.all(
        session.speakers.map(async (name) => {
          return await getSpeaker(name);
        }),
      );

      // session.moderators = await Promise.all(
      //   session.moderators.map(async (speakerId) => {
      //     return await getSpeakerById(speakerId);
      //   }),
      // );
    }),
  );
  data.sort((a, b) => a.start - b.start);
  return data;
};

const getSessionsBySpeaker = async (name) => {
  const data = await getAgenda();
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
co// nst getSessionsBySpeakerId = async (id) => {
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
  getSponsorById,
  getSpeakers,
  getSpeakerById,
  getMedia,
  getExhibitors,
  getExhibitorById,
  getWorkshops,
  getSeminars,
  getAgenda,
  getSessionsBySpeaker,
  // getSessionsBySpeakerId,
};
