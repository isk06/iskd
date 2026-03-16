/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["fs", "path"],
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
