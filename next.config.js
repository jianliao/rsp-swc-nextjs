/** @type {import('next').NextConfig} */
const { readdirSync } = require('fs');
const { resolve, sep } = require('path');
const flatten = (arr) => arr.reduce((acc, val) => acc.concat(val));
const getTSModules = () =>
  flatten(['@adobe', '@react-aria', '@react-spectrum', '@react-stately', '@spectrum-icons', '@swc-nextjs'].map(scope => readdirSync(resolve(`.${sep}node_modules${sep}${scope}`)).map(pkgName => `${scope}/${pkgName}`)));
const withTM = require('next-transpile-modules')(getTSModules());

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  }
}

module.exports = withTM(nextConfig);
