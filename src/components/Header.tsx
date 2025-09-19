'use client';

import {useCallback, useEffect, useMemo, useState} from 'react';
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/routing';

const twitterBase = 'https://twitter.com/intent/tweet';
const facebookBase = 'https://www.facebook.com/sharer/sharer.php';
const linkedinBase = 'https://www.linkedin.com/shareArticle';

export default function Header() {
  const t = useTranslations('common');
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sharePayload, setSharePayload] = useState({text: '', url: ''});

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const url = window.location.href;
    const title = document.title;
    setSharePayload({
      text: t('shareMessage', {title, url}),
      url
    });
    setMenuOpen(false);
  }, [pathname, t]);

  const normalizedPath = useMemo(() => {
    if (!pathname) return '/';
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && ['en', 'zh'].includes(segments[0] ?? '')) {
      const sliced = segments.slice(1);
      return `/${sliced.join('/')}` || '/';
    }

    return pathname || '/';
  }, [pathname]);

  const navItems = useMemo(
    () => [
      {href: '/', label: t('nav.home')},
      {href: '/math-formulas', label: t('nav.math')},
      {href: '/double-angle-formulas', label: t('nav.doubleAngle')},
      {href: '/pdfs/geometric-formulas.pdf', label: t('nav.pdf'), external: true}
    ],
    [t]
  );

  const handleShare = useCallback(async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: sharePayload.text,
          url: sharePayload.url
        });
        return;
      } catch (error) {
        // Ignore share cancellation errors.
      }
    }

    setMenuOpen((current) => !current);
  }, [sharePayload]);

  const handleCopy = useCallback(async () => {
    if (!sharePayload.text) return;
    try {
      await navigator.clipboard.writeText(sharePayload.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      setCopied(false);
    }
  }, [sharePayload.text]);

  const shareLinks = useMemo(() => {
    if (typeof window === 'undefined' || !sharePayload.url) {
      return [];
    }

    const params = new URLSearchParams();
    params.set('url', sharePayload.url);
    params.set('text', sharePayload.text);

    const pageTitle = document?.title ?? sharePayload.url;

    return [
      {
        label: 'Twitter',
        href: `${twitterBase}?${params.toString()}`,
        id: 'twitter'
      },
      {
        label: 'Facebook',
        href: `${facebookBase}?u=${encodeURIComponent(sharePayload.url)}&quote=${encodeURIComponent(
          sharePayload.text
        )}`,
        id: 'facebook'
      },
      {
        label: 'LinkedIn',
        href: `${linkedinBase}?mini=true&url=${encodeURIComponent(sharePayload.url)}&title=${encodeURIComponent(
          pageTitle
        )}&summary=${encodeURIComponent(sharePayload.text)}`,
        id: 'linkedin'
      }
    ];
  }, [sharePayload]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {t('siteName')}
          </p>
          <h1 className="text-lg font-bold sm:text-xl">{t('tagline')}</h1>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
          <nav aria-label="Primary" className="flex flex-wrap items-center gap-3 text-sm font-semibold">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-3 py-1 text-accent transition hover:bg-accent/10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                );
              }

              const isActive = normalizedPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-1 transition ${
                    isActive ? 'bg-accent text-white shadow-sm' : 'text-accent hover:bg-accent/10'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="relative flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90"
              onClick={() => window.print()}
            >
              {t('actions.print')}
            </button>
            <button
              type="button"
              className="rounded-lg border border-accent px-3 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10"
              onClick={handleShare}
            >
              {t('actions.share')}
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-12 w-56 rounded-lg border border-line bg-white p-2 text-sm shadow-lg">
                <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted">
                  {t('actions.share')}
                </p>
                <div className="flex flex-col">
                  {shareLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md px-2 py-1.5 text-left hover:bg-card"
                    >
                      {link.label}
                    </a>
                  ))}
                  <button
                    type="button"
                    className="mt-1 rounded-md px-2 py-1.5 text-left font-medium text-accent transition hover:bg-card"
                    onClick={handleCopy}
                  >
                    {copied ? t('actions.copied') : t('actions.copy')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
