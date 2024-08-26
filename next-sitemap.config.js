import { getSpeakers, getOrganizations, getSessions } from "./lib/api.js";

const nextSitemapConfig = {
  siteUrl: "https://genaisummit.ai",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalPaths: async (config) => {
      const speakers = await getSpeakers();
      const organizations = await getOrganizations();
      const sessions = await getSessions();

      // Generate paths for speakers
      const speakerPaths = speakers.map((speaker) => ({
        loc: `/speaker/${speaker.id}`,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.5,
      }));

      // Generate paths for organizations
      const organizationPaths = organizations.map((org) => ({
        loc: `/organization/${org.id}`,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.5,
      }));

      const sessionPaths = sessions.map((session) => ({
        loc: `/session/${session.id}`,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.5,
      }));

      // Combine all paths
      return [...speakerPaths, ...organizationPaths, ...sessionPaths];
    },
  },
};

export default nextSitemapConfig;
