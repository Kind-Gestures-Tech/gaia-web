/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
require("./env");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
      // or if you prefer syncWebAssembly:
      // syncWebAssembly: true,
    };
    return config;
  },

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  output: "standalone",
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = config;
