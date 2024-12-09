/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [`${process.env.DOMAIN}`]
    },
    assetPrefix: `${process.env.NEXT_PUBLIC_ASSET_PREFIX || 'http://l3m.dev'}`,
    publicRuntimeConfig: {
        domain: process.env.NEXT_PUBLIC_DOMAIN || 'http://l3m.dev',
        cmdApiUrl: `${process.env.NEXT_PUBLIC_CMS_API_URL || 'https://cms.l3m.dev'}`,
    }
};
      
module.exports = nextConfig
