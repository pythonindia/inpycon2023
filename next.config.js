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
  rewrites: async () => {
    return [
      {
        source: "/2023/code-of-conduct",
        destination: "/coc",
      },
    ];
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
