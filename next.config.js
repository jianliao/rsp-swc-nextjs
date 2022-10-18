// @ts-check

/** @type {import('next').NextConfig} */
const { readdirSync } = require('fs');
const { resolve, sep } = require('path');
const flatten = (arr) => arr.reduce((acc, val) => acc.concat(val));
const getTSModules = () =>
  flatten(
    ['@adobe', '@react-aria', '@react-spectrum', '@react-stately', '@spectrum-icons', '@swc-nextjs'].map((scope) =>
      readdirSync(resolve(`.${sep}node_modules${sep}${scope}`)).map((pkgName) => `${scope}/${pkgName}`)
    )
  );
const withTM = require('next-transpile-modules')(getTSModules());

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
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

module.exports = withTM(nextConfig);
