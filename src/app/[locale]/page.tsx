import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';
import ShapeCard from '@/components/ShapeCard';
import {getGeometryContent} from '@/data/geometry';
import {getDownloadLinks} from '@/data/downloads';
import type {Locale} from '@/i18n/routing';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'home'});

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription')
    },
    twitter: {
      title: t('metaTitle'),
      description: t('metaDescription')
    }
  };
}

export default async function GeometryPage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'home'});
  const downloads = getDownloadLinks(params.locale);
  const content = getGeometryContent(params.locale);

  return (
    <div className="space-y-12">
      <section className="rounded-2xl border border-line/60 bg-card p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-ink">{t('heading')}</h2>
        <div className="mt-4 space-y-2 text-sm text-muted">
          <p className="font-semibold uppercase tracking-wide text-accent">{t('noteTitle')}</p>
          <p>{t('noteBody')}</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-ink">{t('downloadsHeading')}</h2>
        <ul className="mt-4 grid gap-4 lg:grid-cols-2">
          {downloads.map((item) => (
            <li key={item.href} className="rounded-2xl border border-line/60 bg-white p-5 shadow-sm">
              <a href={item.href} className="text-lg font-semibold text-accent" target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-ink">{t('sections.planarHeading')}</h2>
          <p className="mt-2 text-sm text-muted">{t('sections.planarDescription')}</p>
        </div>
        <div className="space-y-6">
          {content.planar.map((shape) => (
            <ShapeCard key={shape.id} {...shape} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-ink">{t('sections.solidHeading')}</h2>
          <p className="mt-2 text-sm text-muted">{t('sections.solidDescription')}</p>
        </div>
        <div className="space-y-6">
          {content.solids.map((shape) => (
            <ShapeCard key={shape.id} {...shape} />
          ))}
        </div>
      </section>
    </div>
  );
}
