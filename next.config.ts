import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.dummyjson.com",
            },
            {
                protocol: "http",
                hostname: "server.hikmahlibrary.com",
            },
            {
                protocol: "https",
                hostname: "superiorfoodbazar.com",
            },
        ],
    },
};

export default nextConfig;
