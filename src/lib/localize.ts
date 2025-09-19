import type {Locale} from '@/i18n/routing';

export type LocalizedString = Record<Locale, string>;

export function pickLocalized(text: LocalizedString, locale: Locale): string {
  return text[locale] ?? text.en;
}

export type LocalizedRichText = Record<Locale, string>;
