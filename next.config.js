/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      styledComponents: true
    },
    images: {
      domains: ['localhost'],
    },
    webpack: (config) => {
      config.resolve.fallback = { fs: false, net: false, tls: false };
      return config;
    }
  };
  
  module.exports = nextConfig;