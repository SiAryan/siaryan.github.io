import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use static export for GitHub Pages
  output: "export",

  // Set the basePath only for production (GitHub Pages)
  basePath: process.env.NODE_ENV === "production" ? "/siaryan.github.io" : "",

  // Set the assetPrefix to make sure assets are correctly linked
  assetPrefix: process.env.NODE_ENV === "production" ? "/siaryan.github.io" : "",

  // Optional: Disable image optimization since GitHub Pages doesn't support Next.js Image Optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
