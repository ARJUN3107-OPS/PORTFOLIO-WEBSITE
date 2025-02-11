/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Ensure all TS loaders are updated
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));
    tsRules.forEach(rule => {
      rule.include = undefined;
    });

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  output: "export", // ✅ Enables static export
  images: {
    unoptimized: true, // ✅ Fixes image issues in static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig; // ✅ Correct export syntax
