/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing images configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      },
    ],
  },

  // Add the new headers function here
  async headers() {
    return [
      {
        source: '/(.*)', // Match all routes
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL', // Allow iframe embedding
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors *", // Allow any origin to embed
          },
        ],
      },
    ];
  },
};

export default nextConfig;