import type {MetadataRoute} from 'next';
import {locales} from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://geometryformulas.example';
  const paths = ['', '/math-formulas', '/double-angle-formulas'];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const
    }))
  );
}
