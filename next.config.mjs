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
    ],
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};

export default nextConfig;
