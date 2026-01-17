import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://micro-saas-ten-xi.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/', // Keep your internal API routes private
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot'],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
