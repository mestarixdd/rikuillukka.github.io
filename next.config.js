/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/rikuillukka.github.io',
  assetPrefix: '/rikuillukka.github.io/',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig