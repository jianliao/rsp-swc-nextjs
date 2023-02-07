// @ts-check

/** @type {import('next').NextConfig} */
const { readdirSync } = require('fs');
const { resolve, sep } = require('path');

const getTSModules = () =>
  ['@adobe', '@react-aria', '@react-spectrum', '@react-stately', '@spectrum-icons', '@swc-next']
    .map((scope) => readdirSync(resolve(`.${sep}node_modules${sep}${scope}`)).map((pkgName) => `${scope}/${pkgName}`))
    .flat();

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  transpilePackages: getTSModules(),
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.module.rules.push({
      test: /\.(js)$/,
      loader: 'string-replace-loader',
      options: {
        search: /customElements\.define\("(.*)"/,
        replace: (_match, p1) => {
          return `!customElements.get("${p1}") && customElements.define("${p1}"`;
        },
        flags: 'g',
      },
    });
    return config;
  },
};

module.exports = nextConfig;
