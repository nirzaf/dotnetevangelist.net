/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "*",
        },
      ],
    },
    redirects: async () => {
      return [];
    },
  };
  
  export default nextConfig;
  