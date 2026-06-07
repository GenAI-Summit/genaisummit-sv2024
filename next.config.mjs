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
        hostname: "d3ej931a0s5mcg.cloudfront.net",
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
      {
        protocol: "https",
        hostname: "www.facebook.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media-exp1.licdn.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
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
