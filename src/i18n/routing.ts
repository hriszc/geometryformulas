import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'zh'] as const;

export type Locale = (typeof locales)[number];

export const routing = {
  locales,
  defaultLocale: 'en' as Locale,
  localePrefix: 'always' as const
};

export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation(routing);
