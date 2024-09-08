/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: ["lh3.googleusercontent.com", "imagedelivery.net"],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**',
        },
      ],
    },
};

export default nextConfig;

