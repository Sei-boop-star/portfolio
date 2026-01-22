import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: "/portfolio", // Repository name matches the URL path
  assetPrefix: "/portfolio/", // Ensure assets are loaded from the correct path
};

export default nextConfig;
