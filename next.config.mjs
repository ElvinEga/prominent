/* jshint esversion: 6 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',  // Enables static export feature
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "prominentau.netlify.app"],
  },
};

export default nextConfig;
