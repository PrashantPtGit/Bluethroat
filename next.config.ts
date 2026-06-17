import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // generates static out/ folder for Hostinger
  trailingSlash: true,   // /work → /work/index.html — works on any static host
  images: {
    unoptimized: true,   // required for static export (no server-side image API)
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
