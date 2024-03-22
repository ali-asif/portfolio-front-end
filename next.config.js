/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["pbs.twimg.com", "i.ibb.co"]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
