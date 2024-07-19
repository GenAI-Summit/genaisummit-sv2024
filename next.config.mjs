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
    ],
  },
  /*
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  */
  distDir: "dist",
};

export default nextConfig;
