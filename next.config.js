const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeholder.com', 'jeremymattinglydesignsllc.com'], 
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'components'); 
    return config;
  },
};

module.exports = nextConfig;
