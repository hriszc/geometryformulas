import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';
import {getMathSections} from '@/data/math';
import type {Locale} from '@/i18n/routing';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'math'});

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

export default async function MathFormulasPage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'math'});
  const content = getMathSections(params.locale);

  const sections: Array<{key: keyof typeof content; label: string}> = [
    {key: 'arithmetic', label: t('sections.arithmetic')},
    {key: 'algebra', label: t('sections.algebra')},
    {key: 'geometry', label: t('sections.geometry')}
  ];

  return (
    <div className="space-y-12">
      <section className="rounded-2xl border border-line/60 bg-card p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-ink">{t('heading')}</h1>
        <p className="mt-3 text-sm text-muted">{t('noteBody')}</p>
      </section>

      {sections.map((section) => (
        <section key={section.key} className="space-y-4">
          <h2 className="text-xl font-semibold text-ink">{section.label}</h2>
          <ul className="space-y-3 rounded-2xl border border-line/50 bg-white p-6 shadow-sm">
            {content[section.key].map((formula, index) => (
              <li key={index} className="rounded-lg border border-line/40 bg-slate-50 p-4">
                <div className="text-lg" dangerouslySetInnerHTML={{__html: formula.mathml}} />
                {formula.note ? <p className="mt-2 text-xs text-muted">{formula.note}</p> : null}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
