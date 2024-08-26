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
    additionalSitemaps: ["https://api.gptdao.ai/sitemap/sitemap.xml"],
  },
};

export default nextSitemapConfig;
