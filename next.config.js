// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //   }
  // }
  images: {
    unoptimized: true
  }
}


module.exports = nextConfig
