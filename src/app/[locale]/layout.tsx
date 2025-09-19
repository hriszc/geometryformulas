import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import type {Metadata} from 'next';
import Script from 'next/script';
import type {ReactNode} from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {locales, type Locale} from '@/i18n/routing';

const baseUrl = 'https://geometryformulas.example';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const {locale} = params;
  const t = await getTranslations({locale, namespace: 'common'});

  return {
    title: t('siteName'),
    description: t('tagline'),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: Object.fromEntries(locales.map((loc) => [loc, `${baseUrl}/${loc}`]))
    },
    openGraph: {
      locale,
      alternateLocale: locales.filter((loc) => loc !== locale),
      siteName: t('siteName')
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: {locale: Locale};
}) {
  const {locale} = params;
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations({locale, namespace: 'common'});

  const knowledgeGraph = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: t('siteName'),
    description: t('tagline'),
    inLanguage: locale,
    url: `${baseUrl}/${locale}`,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/${locale}?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  } satisfies Record<string, unknown>;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-paper text-ink">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Script id="knowledge-graph" type="application/ld+json" strategy="beforeInteractive">
            {JSON.stringify(knowledgeGraph)}
          </Script>
          <Header />
          <main className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-8">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
