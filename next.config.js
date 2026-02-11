/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow backend API calls during server-side rendering
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://backend:5000/api/:path*',
      },
    ];
  },
}

module.exports = nextConfig
