import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/pool-opening",
        destination: "/opening",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
