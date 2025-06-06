/** @type {import('next').NextConfig} */ 
const nextConfig = { 
  reactStrictMode: true, 
  images: { 
    domains: ['tooltonic.io'], 
  }, 
  experimental: { 
    serverActions: true, 
  }, 
  env: { 
    NEXT_PUBLIC_ADSENSE_ID: process.env.NEXT_PUBLIC_ADSENSE_ID, 
  }, 
}; 
 
module.exports = nextConfig;