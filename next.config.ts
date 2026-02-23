import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.gallabox.com',
      },
    ],
  },
  // Enable static exports if needed
  // output: 'export',
};

export default nextConfig;
