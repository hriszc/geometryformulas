/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://geometryformulas.example',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ['/opengraph-image', '/icon'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString()
    };
  }
};

module.exports = config;
