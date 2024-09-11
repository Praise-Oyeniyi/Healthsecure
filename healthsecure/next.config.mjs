// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove experimental.appDir as it's no longer needed in Next.js 14
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.watchOptions = {
          ignored: /node_modules/,
          poll: 1000,
        }
      }
      return config
    },
  }
  
  export default nextConfig