/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.amazon.es',  // Add amazon.es
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'r.search.yahoo.com',  // Add yahoo search pattern in case of redirection
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
