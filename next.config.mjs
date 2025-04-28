/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint :{
    ignoreDuringBuilds : false,
  },
  images : {
    remotePatterns : [
      {
        protocol : "https",
        hostname : "drive.google.com"
      }
    ]
  }
};

export default nextConfig;