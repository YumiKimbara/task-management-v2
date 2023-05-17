/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    swcTraceProfiling: true,
    appDir: true,
  },
};

module.exports = nextConfig;
