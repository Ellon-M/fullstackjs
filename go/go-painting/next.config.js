/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["ecgc2.csb.app", "images.pexels.com", "images.prismic.io", "res.cloudinary.com"],
    loader: 'imgix',
    path: '/',
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/commercial': { page: '/commercial'},
      '/contactus': { page: '/contactus'},
      '/drywall': { page: '/drywall'},
      '/gallery': { page: '/gallery'},
      '/gypsum': { page: '/gypsum'},
      '/industrial': { page: '/industrial'},
      '/ourservices': { page: '/ourservices'},
      '/residential': { page: '/residential'},
      '/shop': { page: '/shop'},
      '/wooden': { page: '/wooden'},
    }
  },
}
