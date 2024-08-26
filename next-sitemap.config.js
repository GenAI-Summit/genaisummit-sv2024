import { getSpeakers, getOrganizations, getSessions } from "./lib/api.js";

const nextSitemapConfig = {
  siteUrl: "https://genaisummit.ai",
  generateRobotsTxt: true,
  additionalPaths: async () => {
    const speakers = await getSpeakers();
    const organizations = await getOrganizations();
    const sessions = await getSessions();

    const speakerPaths = speakers.map((speaker) => ({
      loc: `/speaker/${speaker.id}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.5,
    }));

    const organizationPaths = organizations.map((org) => ({
      loc: `/organization/${org.id}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.5,
    }));

    const sessionPaths = sessions.map((session) => ({
      loc: `/session/${session.id}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.5,
    }));

    return [...speakerPaths, ...organizationPaths, ...sessionPaths];
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

export default nextSitemapConfig;
