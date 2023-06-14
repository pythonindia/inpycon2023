module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader",
    });
    return config;
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: '',
  basePath: '/2023',
};
