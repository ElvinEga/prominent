/* jshint esversion: 6 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',  // Enables static export feature
  trailingSlash: true,
  images: {
    domains: ["images.unsplash.com", "prominentau.netlify.app"],
  },
};

export default nextConfig;
