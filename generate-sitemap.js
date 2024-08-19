const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

// Crea una instancia de SitemapStream
const sitemap = new SitemapStream({ hostname: 'https://www.transrotviajes.com/' });

// Añade las URLs de tu sitio
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/ProximoViaje', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/TestimonialsSection', changefreq: 'monthly', priority: 0.6 });
sitemap.write({ url: '/ViajesLlenos', changefreq: 'monthly', priority: 0.6 });
sitemap.write({ url: '/SobreNosotros', changefreq: 'monthly', priority: 0.6 });
sitemap.write({ url: '/Contactos', changefreq: 'monthly', priority: 0.6 });
sitemap.write({ url: '/index', changefreq: 'daily', priority: 1.0 });
sitemap.end();

// Genera el sitemap.xml
streamToPromise(sitemap).then((data) => {
  fs.writeFileSync('./dist/sitemap.xml', data.toString());
});
