import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Vercel-friendly config — no standalone output (Vercel uses its own serverless/edge runtime) */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
