/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.imgur.com'] // add external domains here
  },
  // env: {
  //   API_URL: process.env.API_URL || 'http://localhost:8080', // default to localhost for development
  // },
};

export default nextConfig;
