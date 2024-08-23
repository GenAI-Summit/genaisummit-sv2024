// import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
        pathname: "/dms/image/**",
      },
      {
        protocol: "https",
        hostname: "d1keuthy5s86c8.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "whova.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "genaisummit.ai",
        port: "",
        pathname: "/images/notable_attendees/**",
      },
    ],
  },
  output: "standalone",
  /*
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  distDir: "dist",
  */
};

/*
if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}
*/

export default nextConfig;
