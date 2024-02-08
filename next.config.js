/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.sitecoresandbox.cloud',
      },
    ]
  }
}

module.exports = nextConfig
