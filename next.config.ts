import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // static export, served via Vercel's static CDN
  trailingSlash: true,   // /work → /work/index.html
  images: {
    unoptimized: true,   // required for static export (no server-side image API)
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
