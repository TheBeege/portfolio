export const languages = {
  en: { label: 'English', short: 'EN', ogLocale: 'en_US' },
  ko: { label: '한국어', short: 'KO', ogLocale: 'ko_KR' },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** localStorage key holding the visitor's explicit language choice */
export const LANG_STORAGE_KEY = 'preferred-lang';

export function isLang(value: string | undefined): value is Lang {
  return !!value && value in languages;
}

/** Path of the home page for a given language, e.g. "/" or "/ko/" */
export function homePath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
