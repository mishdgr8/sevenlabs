/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],

  webpack: (config, { dev, isServer }) => {
    // Add your custom webpack configurations here
    return config;
  },
};

module.exports = nextConfig;
