import 'dotenv';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;

// export const env = {
//   API_URL: process.env.API_URL,
// };
