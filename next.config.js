// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
   experimental: {
    appDir: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  }
}


module.exports = nextConfig
